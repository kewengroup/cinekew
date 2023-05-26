export const Snack = () => {
  return (
    <main>
        <section className="flex flex-col justify-center text-center py-5 my-5">
            <h1 class="flex justify-center items-center text-5xl font-extrabold dark:text-white">Milk Tea, Coffee, & Snack<span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2 mb-8
             ">TAKEO</span></h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">CALL US: 096 44-6666-3</p>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Everyday from 7AM to 10PM</p>
            <a href="https://t.me/yoyotea" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                ORDER NOW!
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </section>
        
        <section className="flex justify-around flex-wrap py-5">
            <div className="max-w-max">
                <img className="rounded" src="https://scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/323355181_1289619664962858_171455112807009220_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c4c01c&_nc_eui2=AeGjQtrOradILljQ_DQsCc9j5sl88kN_JNnmyXzyQ38k2XI9PG8mW0vJioiS7Tnkm6tQMXOz5EZ9EHRJu_KizBn-&_nc_ohc=b4raFJdP8_MAX_-lFK7&_nc_ht=scontent.fpnh5-3.fna&oh=00_AfBQGsh8yja8fi_95nIpribenEvqJSuyfGvav_B9Xp_xZA&oe=6474EA42" alt="YOYO" />
            </div>
            <div className="max-w-max">
                <img className="rounded" src="https://scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/334935161_1243325286601374_6520328461890173735_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFhAiNBusMqPxdsfSekx-JMAlycQkmuzxcCXJxCSa7PF3wt5LVTy42XXI9sLI5QvWOPj-2gYPdFNOjdIVsVw6Pt&_nc_ohc=AEeGOOKqL7sAX9WdBi3&_nc_oc=AQnts1bWOsGa1LJkNy_vm1sJLT9sSgVg8VEAFU0pWxEKc2fAEuK2TRqHdIG2irCNtuQ&_nc_ht=scontent.fpnh5-2.fna&oh=00_AfCLCkdiGgx91u8JisOP-jdeF8FxY9GfLHevGSd-G0qF3A&oe=64763AB8" alt="KO3" />
            </div>
        </section>
        
    </main>
  )
}
