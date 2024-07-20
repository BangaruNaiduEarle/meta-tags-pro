import React, { useState } from 'react';
import { Helmet } from 'react-helmet';


function Home() {
    return (
        <div>
          <Helmet>
                <meta property="og:title" content="Vercel Og Title Home Page" />

                <meta property="og:description" content="Naidu Vercel App Description for the testing Home Page" />
                <meta property="og:image" content="https://www.shutterstock.com/image-vector/seo-meta-data-optimization-concept-260nw-2027713787.jpg" />

                <meta property="og:url" content="https://meta-tags-pro.vercel.app/" />
                <meta property="og:type" content="Website" />
            </Helmet> 
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1630227585390-758433700ab2?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NzIwfGVufDB8fDB8fHww" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;