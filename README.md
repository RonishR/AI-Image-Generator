# About
The **"AI Image Generator"** is a website that combines the power of **DALL·E 2, ChatGPT, Next.js, and Azure** to transform your textual prompts into stunning, one-of-a-kind images.
The website has the ability to store all the images that were generated. Every image produced by the AI is archived and showcased on the homepage, creating a captivating visual history of user interactions.
<br/>

**Demo:** https://drive.google.com/file/d/17u2BFGOVyrToJStj1u-SHDSwFDaz7M4t/view?usp=sharing

<img width="1679" alt="Screenshot 2023-10-05 at 7 20 19 PM" src="https://github.com/RonishR/AI-Image-Generator/assets/69105829/10206b3a-8e1c-482c-9d85-a8b2c235860e">



## Key Features

- **NEXT.JS:**
This website is built using NEXT.JS for a user friendly experience and optimal performance.

- **DALL·E 2 Integration:**
This website seamlessly integrates with DALL·E 2, an advanced AI model capable of generating images from textual descriptions. Simply input your prompt, and watch as the AI brings your vision to life.

- **ChatGPT Integration:**
ChatGPT has been integrated to suggest prompts for DALL·E 2 which the user can make use of to seek inspiration.

- **Azure Blob Storage:**
To manage the extensive image collection, Azure Blob Storage has been utilised. This powerful cloud storage solution ensures efficient data management and retrieval for all stored images.

- **Azure Function:**
Azure Functions are employed to seamlessly connect with the DALL·E 2 API and ChatGPT API, enabling rapid and reliable communication with the AI models.

- **Vercel:**
The project is hosted and deployed using Vercel, ensuring a high-performance and scalable web application accessible to users worldwide.

- **React-Hot-Toast:**
React Hot Toast has been integrated for real-time notifications about the image generation process.

## Technologies Used

- NEXT.JS
- Tailwind.CSS
- Azure Blob Storage
- Azure Functions
- DALL·E 2
- ChatGPT
- TypeScript
- JavaScript
- Vercel
- React-Hot-Toast


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
