"use client";
import { FormEvent, useState } from "react";
import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import useSWR from "swr"
import fetchImages from "@/lib/fetchImages";
import toast from "react-hot-toast";




function PromptInput() {
  const [input, setInput] = useState("");

  const { data: suggestion, isLoading, mutate, isValidating } = useSWR("/api/suggestion", fetchSuggestionFromChatGPT, {
      revalidateOnFocus: false,
  });

  const { mutate: updateImages } = useSWR("images", fetchImages, {
    revalidateOnFocus: false,
  });
 

  const loading = isLoading || isValidating;


  const submitPrompt = async (useSuggestion?: boolean) =>{
    const inputPrompt = input;
    setInput("");

    console.log(inputPrompt);

    //p is prompt sent to api
    const p = useSuggestion ? suggestion : inputPrompt;
    const notificationPrompt = p;
    const notificationPromptShort = notificationPrompt.slice(0,20);

    const notification = toast.loading(`DALL•E is creating ${notificationPromptShort}...`);


    const res = await fetch('/api/generateImage', {
      method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: p}),
    });

    const data = await res.json();

    if (data.error){
      toast.error(data.error,{
        id: notification, //using id so that the previous notification is repleced ie. "DALL•E is creating ${notificationPromptShort}..."
      });
    }
    else {
      toast.success(`Your AI Art has been generated!`,{
        id: notification,
      });
    }

    updateImages();

  };
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await submitPrompt();
  };


  return (
    <div className='m-10'>
        <form onSubmit={handleSubmit} className='flex border rounded-full'>
            <input type="text" placeholder={(loading && "ChatGPT is thinking of a suggestion...") || suggestion || "Search"}  
              className='text-white text-left text-xl flex-1 pl-4 p-2 outline-none rounded-l-full bg-zinc-700 ' value={input} onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className={`${input ? 'p-2 font-medium bg-zinc-700 transition duration-300 hover:bg-zinc-800 hover:text-white' : 'bg-zinc-700 p-2 font-medium cursor-not-allowed'}`}
              disabled = {!input} >
              Generate
            </button>
            <button type="button" className='p-2 font-medium bg-zinc-700 transition duration-300 hover:bg-zinc-800 hover:text-white' onClick={() => submitPrompt(true)}
              disabled={isLoading || isValidating}>
              Use Suggestion
            </button>
            <button className='p-2 font-medium bg-zinc-700 rounded-r-full transition duration-300 hover:bg-zinc-800 hover:text-white' onClick={mutate} type="button">New Suggestion</button>
        </form>
        
    </div>
  )
}
export default PromptInput