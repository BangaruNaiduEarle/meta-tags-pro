import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SEO from '../components/withMeta';


const teamMeta = {
    title: "Vercel Og Title Team Page",
    description: "Naidu Vercel App Description for the testing Team Page",
    image: "https://kautilya.org.in/img/governanceExcellenceInitiativeKautilya.jpg",
    url: "https://meta-tags-pro.vercel.app/",
    type: "website"
};
function Team() {

    return (
        // <HelmetProvider>
        <div>
            {/* <Helmet>
                <meta property="og:title" content={teamMeta.title} />
                <meta property="og:description" content={teamMeta.description} />
                <meta property="og:image" content={teamMeta.image} />
                <meta property="og:url" content={teamMeta.url} />
                <meta property="og:type" content={teamMeta.type} />
            </Helmet> */}
            <SEO
                title="Vercel Og Title Team Page"
                description="Naidu Vercel App Description for the testing TEAM Page"
                image="https://kautilya.org.in/img/governanceExcellenceInitiativeKautilya.jpg" // Specific image for this page
                keywords={[`gatsby`, `react`, `SEO`]}
            />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
                            Franzen you probably haven't heard of them.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                    <p className="text-gray-500">UI Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                                    <p className="text-gray-500">CTO</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                                    <p className="text-gray-500">Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                                    <p className="text-gray-500">DevOps</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                                    <p className="text-gray-500">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                                    <p className="text-gray-500">UX Researcher</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                                    <p className="text-gray-500">QA Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                                    <p className="text-gray-500">System</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                                    <p className="text-gray-500">Product Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        // </HelmetProvider>
    );
}

// export default withMeta(Team, teamMeta);
export default Team;
