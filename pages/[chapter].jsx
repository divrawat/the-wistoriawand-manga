import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { APP_NAME, DOMAIN, MANGA_NAME, NEXT_PREVIOUS_PREFIX, IMAGE_PREFIX, CHAPTER_PREFIX, AUTHOR_PAGE, LOGO_URL, chaptersData, IMAGES_SUBDOMAIN, DOMAIN_NAME, MANGA_GENRE, MANGA_TYPE, MANGA_SUMMARY } from '@/config';
import { useState, useEffect } from 'react';
import React from 'react';
// import DisqusComments from '@/components/DisQus';
export const runtime = 'experimental-edge';
// const AdSense = dynamic(() => import('@/components/Adsense'), { ssr: false });

export default function Chapter({ chapterNumber, imageUrls, totalChapters, params, errorcode }) {

    if (errorcode) {
        return (
            <>
                <Navbar />
                <div className="text-center py-10">
                    <h1 className="text-3xl font-bold mt-10">404 Page Not Found</h1>
                    <p className="text-lg mt-4">The page you are looking for does not exist.</p>
                </div>
                <Footer />
            </>
        );
    }


    const chapterIndex = chaptersData.findIndex(chapter => chapter.chapterNumber === chapterNumber);
    const previousChapter = chapterIndex > 0 ? chaptersData[chapterIndex - 1].chapterNumber : null;
    const nextChapter = chapterIndex < totalChapters - 1 ? chaptersData[chapterIndex + 1].chapterNumber : null;


    const DESCRIPTION = `Read ${MANGA_NAME} chapter ${chapterNumber} online at ${DOMAIN_NAME}. All ${MANGA_NAME} ${MANGA_TYPE} chapters are always updated regularly in HD quality.`;
    const URL = params.chapter;


    const schema00 =
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${DOMAIN}/${URL}`
        },
        "headline": `${MANGA_NAME} Chapter ${chapterNumber}`,
        "description": `${DESCRIPTION}`,
        "image": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
        "author": {
            "@type": "Person",
            "name": `${MANGA_NAME} Team`,
            "url": `${AUTHOR_PAGE}`
        },
        "publisher": {
            "@type": "Person",
            "name": `${APP_NAME}`,
            "logo": {
                "@type": "ImageObject",
                "url": `${LOGO_URL}`
            }
        },
    }


    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `${DOMAIN}/${URL}/#article`,
                "isPartOf": {
                    "@id": `${DOMAIN}/${URL}`,
                },
                "author": {
                    "name": "Divyanshu Singh Rawat",
                    "@id": `${DOMAIN}/#/schema/person/7edc4ad8bsc84d70b9422d149194021b`,
                },
                "headline": `${MANGA_NAME} ${MANGA_TYPE} Chapter ${chapterNumber}`,
                "mainEntityOfPage": {
                    "@id": `${DOMAIN}/${URL}`
                },
                "wordCount": 150,
                "commentCount": 34,
                "publisher": {
                    "@id": `${DOMAIN}/#organization`
                },
                "image": {
                    "@id": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
                },
                "thumbnailUrl": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
                "articleSection": ["Manga Series"],
                "inLanguage": "en-US",
                "potentialAction": [
                    {
                        "@type": "CommentAction",
                        "name": "Comment",
                        "target": [
                            `${DOMAIN}/${URL}/#respond`
                        ]
                    }
                ]
            },
            {
                "@type": "WebPage",
                "@id": `${DOMAIN}/${URL}`,
                "url": `${DOMAIN}/${URL}`,
                "name": `${MANGA_NAME} ${MANGA_TYPE} Chapter ${chapterNumber}`,
                "isPartOf": {
                    "@id": `${DOMAIN}/#website`
                },
                "primaryImageOfPage": {
                    "@id": `${DOMAIN}/${URL}/#primaryimage`
                },
                "image": {
                    "@id": `${DOMAIN}/${URL}/#primaryimage`
                },
                "thumbnailUrl": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
                "description": `Read ${MANGA_NAME} manga Online at ${DOMAIN_NAME} which is the best website for reading manga online in HD quality.`,
                "breadcrumb": {
                    "@id": `${DOMAIN}/${URL}/#breadcrumb`
                },
                "inLanguage": "en-US",
                "potentialAction": [
                    {
                        "@type": "ReadAction",
                        "target": [
                            `${DOMAIN}/${URL}`
                        ]
                    }
                ]
            },
            {
                "@type": "ImageObject",
                "inLanguage": "en-US",
                "@id": `${DOMAIN}/${URL}/#primaryimage`,
                "url": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
                "contentUrl": `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`,
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${DOMAIN}/${URL}/#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": `${DOMAIN}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": `${MANGA_NAME} ${MANGA_TYPE} Chapter ${chapterNumber}`,
                    }
                ]
            },
            {
                "@type": "WebSite",
                "@id": `${DOMAIN}/#website`,
                "url": `${DOMAIN}`,
                "name": "My Manga Blog",
                "description": `Read ${MANGA_NAME} manga Online at ${DOMAIN_NAME} which is the best website for reading manga online in HD quality.`,
                "publisher": {
                    "@id": `${DOMAIN}/#organization`
                },
                "potentialAction": [
                    {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": `${DOMAIN}/?s={search_term_string}`,
                        },
                        "query-input": {
                            "@type": "PropertyValueSpecification",
                            "valueRequired": true,
                            "valueName": "search_term_string"
                        }
                    }
                ],
                "inLanguage": "en-US"
            },
            {
                "@type": "Organization",
                "@id": `${DOMAIN}/#organization`,
                "name": "My Manga Blog",
                "url": `${DOMAIN}`,
                "logo": {
                    "@type": "ImageObject",
                    "inLanguage": "en-US",
                    "@id": `${DOMAIN}/#/schema/logo/image/`,
                    "url": `${LOGO_URL}`,
                    "contentUrl": `${LOGO_URL}`,
                    "width": 192,
                    "height": 192,
                    "caption": "My Wistoria Manga Blog"
                },
                "sameAs": []
            },
            {
                "@type": "Person",
                "@id": `${DOMAIN}/#/schema/person/7edc4ad8p1cf4d70b7422c149194021c`,
                "name": "Divyanshu Singh Rawat"
            }
        ]
    }


    const handleRedirect = () => {
        window.open('https://thampolsi.com/4/7457654', '_blank');
    };



    const head = () => (
        <Head>
            <title>{`${MANGA_NAME} ${MANGA_TYPE} Chapter ${chapterNumber}`}</title>
            <meta name="description" content={DESCRIPTION} />
            <link rel="canonical" href={`${DOMAIN}/${URL}`} />
            <meta property="og:title" content={`${MANGA_NAME} ${MANGA_TYPE} Chapter ${chapterNumber}`} />
            <meta property="og:description" content={DESCRIPTION} />
            <meta property="og:type" content="webiste" />
            <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            <meta property="og:url" content={`${DOMAIN}/${URL}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`} />
            <meta property="og:image:secure_url" content={`${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}/1.webp`} />
            <meta property="og:image:type" content="image/webp" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </Head >
    );










    return (
        <>
            {head()}
            <Navbar />
            <article>

                <h1 className="text-3xl font-bold text-center p-5 md:my-5">{`${MANGA_NAME} ${MANGA_TYPE} Chapter ${chapterNumber}`}</h1>
                <p className='text-center px-4'><b>{`You are reading ${MANGA_NAME} ${MANGA_TYPE} Chapter ${chapterNumber}`}</b></p>

                <div className='mx-3 my-7'>
                    <div className="flex justify-between max-w-[800px] mx-auto md:mb-[50px] mt-5">
                        {previousChapter !== null ? (
                            <Link
                                onClick={handleRedirect}
                                href={`${DOMAIN}/${NEXT_PREVIOUS_PREFIX}-${previousChapter}`}>
                                <button className="text-[white] text-[13px] hover:scale-105 active:scale-95 transition-transform rounded bg-[black] px-2 py-2 font-semibold">Previous Chapter</button>
                            </Link>
                        ) : (
                            <button className="text-[white] text-[13px] rounded bg-[gray] px-2 py-2 font-semibold cursor-not-allowed" disabled>Previous Chapter</button>
                        )}

                        {nextChapter !== null ? (
                            <Link
                                onClick={handleRedirect}
                                href={`${DOMAIN}/${NEXT_PREVIOUS_PREFIX}-${nextChapter}`}>
                                <button className="text-[white] text-[13px] hover:scale-105 active:scale-95 transition-transform rounded bg-[black] px-2 py-2 font-semibold">Next Chapter</button>
                            </Link>
                        ) : (
                            <button className="text-[white] text-[13px] rounded bg-[gray] px-2 py-2 font-semibold cursor-not-allowed" disabled>Next Chapter</button>
                        )}

                    </div>
                </div>




                <div className='max-w-[1200px] mx-auto mb-5'>
                    {imageUrls.map((imageUrl, index) => (
                        <div className='allimages' key={index}>
                            <img width={700} height={600} loading="lazy" src={imageUrl} alt={`Chapter ${chapterNumber} Image ${index + 1}`} />
                        </div>
                    ))}
                </div>



                {/* <div className="bg-[black] relative">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="pt-10 pb-10 max-w-[1100px] mx-auto px-5 text-[white] relative z-10">
                        <h2 className="text-center font-extrabold text-3xl">{`More About ${MANGA_NAME} Manga`}</h2>
                        {MANGA_SUMMARY.map(paragraph => (
                            <p className="py-7 leading-[2]" key={paragraph.id}>{paragraph.content}</p>
                        ))}
                    </div>
                </div> */}


                {/* <div className='py-10 bg-[#0f0511]'>
                    <h2 className='text-4xl text-center text-[white] font-blod px-4 mb-10'>Comment Section</h2>
                    <section className='max-w-[1000px] mx-auto px-5'>
                        <DisqusComments url={`/manga/${URL}`} identifier={chapterNumber} title={`${MANGA_NAME} Chapter ${chapterNumber}`} />
                    </section>
                </div> */}
                <div className="flex justify-center">
                    <iframe width="300" height="315" src="https://www.youtube.com/embed/EzgSuKy27aE?si=LVHtTbskcCy65X1m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </article>

            <Footer />
        </>
    );
}

// export async function getStaticPaths() {
//     const paths = chaptersData.map(chapter => ({
//         params: { chapter: `chapter-${chapter.chapterNumber}` },
//     }));
//     return { paths, fallback: 'blocking' };
// }

export async function getServerSideProps({ req, res, params }) {
    const chapterParam = params.chapter;

    if (!chapterParam.startsWith('chapter-')) {
        return { props: { errorcode: true } };
    }

    const chapterNumber = chapterParam.split(`chapter-`)[1];

    // if (chapterNumber === undefined) { return { props: { errorcode: true } }; }

    const chapterData = chaptersData.find(ch => ch.chapterNumber === chapterNumber);
    if (!chapterData) { return { props: { errorcode: true } }; }

    const chapterIndex = chaptersData.findIndex(ch => ch.chapterNumber === chapterNumber);

    const totalChapters = chaptersData.length;
    const numImages = chapterData.numImages;
    const imageUrls = getImageUrls(chapterNumber, numImages);

    // res.setHeader('Cache-Control', 'public, s-maxage=108000, stale-while-revalidate=59');

    return { props: { chapterNumber, imageUrls, totalChapters, params, chapterIndex } };
}


const getImageUrls = (chapterNumber, numImages) => {
    const imageUrls = [];
    const chapterImagesFolder = `${IMAGES_SUBDOMAIN}/chapter-${chapterNumber}`;
    for (let i = 1; i <= numImages; i++) {
        const imageUrl = `${chapterImagesFolder}/${i}.webp`;
        imageUrls.push(imageUrl);
    }
    return imageUrls;
};

