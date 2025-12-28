document.addEventListener('DOMContentLoaded', function () {
    // EMBEDDED DATA - No fetch required, works offline!
    const data = {
        "general_info": {
            "phone": "+91 9704571912",
            "email": "bestdjinvizag@gmail.com",
            "address": "Visakhapatnam, Andhra Pradesh",
            "hero_heading": "Best DJ in Vizag – Professional DJ, Sound & Lighting Services",
            "hero_subheading": "Professional DJ, Sound & Lighting Services for Weddings, Parties & Corporate Events in Visakhapatnam, Hyderabad, Bangalore, Chennai, Mumbai and across South India",
            "page_title": "BestDJ",
            "featured_clients_text": "BIRTHDAY PARTIES<BR>MARRIAGES<BR>CORPORATE EVENTS<BR>SANGEET NIGHTS<BR>ENGAGEMENT PARTIES<BR>AWARD CEREMONIES<BR>LIVE MUSIC INTEGRATION<BR>PRODUCT LAUNCHES<BR>"
        },
        "social_links": {
            "instagram": "https://www.instagram.com/best_magician_vizag/",
            "facebook": "",
            "whatsapp": "https://wa.me/919704571912",
            "youtube": "https://www.youtube.com/@magicvasanthvizag"
        },
        "services": [
            {
                "id": "1",
                "number": "01",
                "category": "Weddings",
                "title": "Wedding DJ Services",
                "description": "Music, sound balance, and lighting designed for wedding ceremonies and receptions.",
                "image": "assets/images/uploads/wedding.png",
                "type": "image"
            },
            {
                "id": "2",
                "number": "02",
                "category": "Parties",
                "title": "Birthday Party DJ",
                "description": "High-energy playlists suitable for kids, teens, and adults to keep the party going.",
                "image": "assets/images/uploads/Birthday.png",
                "type": "image"
            },
            {
                "id": "3",
                "number": "03",
                "category": "Corporate",
                "title": "Corporate Event DJ",
                "description": "Professional DJ setup for conferences, product launches, and office celebrations.",
                "image": "assets/images/uploads/conc.jpg",
                "type": "image"
            },
            {
                "id": "4",
                "number": "04",
                "category": "Audio",
                "title": "Pro Sound Systems",
                "description": "High-quality speakers, microphones, and mixing consoles for crystal clear audio.",
                "image": "assets/images/home/marquee-2.avif",
                "type": "image"
            },
            {
                "id": "5",
                "number": "05",
                "category": "Visuals",
                "title": "Lighting & Stage Effects",
                "description": "LED lighting, ambience effects, focus lights, and fog machines.",
                "image": "assets/images/home/marquee-3.avif",
                "type": "image"
            },
            {
                "id": "6",
                "number": "06",
                "category": "SFX",
                "title": "Cold Fire & CO₂ Effects",
                "description": "Safe, controlled special effects to create memorable moments for your entry.",
                "image": "assets/images/uploads/cold fire.png",
                "type": "image"
            },
            {
                "id": "7",
                "number": "07",
                "category": "Weddings",
                "title": "Sangeet Night DJ",
                "description": "Energetic Bollywood and regional music mixes perfect for sangeet celebrations.",
                "image": "assets/images/uploads/sangeet.png",
                "type": "image"
            },
            {
                "id": "8",
                "number": "08",
                "category": "Parties",
                "title": "Engagement Party DJ",
                "description": "Romantic and upbeat music selections to celebrate your special engagement.",
                "image": "assets/images/home/marquee-2.avif",
                "type": "image"
            },
            {
                "id": "9",
                "number": "09",
                "category": "Audio",
                "title": "Live Music Integration",
                "description": "Seamless mixing of live band performances with DJ sets for a unique experience.",
                "image": "assets/images/uploads/live music.png",
                "type": "image"
            },
            {
                "id": "10",
                "number": "10",
                "category": "Corporate",
                "title": "Award Ceremony Sound",
                "description": "Professional audio setup for award ceremonies, announcements, and presentations.",
                "image": "assets/images/home/parallax.avif",
                "type": "image"
            }
        ],
        "media": {
            "hero_slider": [
                {
                    "type": "video",
                    "url": "assets/images/home/OG.mp4",
                    "duration": 15000
                }
            ],
            "showreel": "https://vz-bf52cb50-0a5.b-cdn.net/ce1749fb-077d-416a-8df8-bc32ac669c3c/playlist.m3u8",
            "background_music": [
                {
                    "title": "Narvent - Fainted (mp3.pm)",
                    "url": "assets/music/Narvent_-_Fainted_(mp3.pm).mp3"
                },
                {
                    "title": "Background Music",
                    "url": "assets/music/bg.mp3"
                }
            ]
        }
    };

    // Process the embedded data (same logic as before)
    // Update Text Content
    if (data.general_info.page_title) {
        document.title = data.general_info.page_title;
    }
    if (data.general_info.featured_clients_text) {
        // Update both desktop and mobile paragraphs
        // For desktop, we keep HTML (br tags) if present
        const desktopClients = document.getElementById('featured-clients-desktop');
        const mobileClients = document.getElementById('featured-clients-mobile');

        if (desktopClients) desktopClients.innerHTML = data.general_info.featured_clients_text;
        // Mobile usually needs simpler styling, but using same text for now as per user request structure
        // We might want to strip HTML for mobile if it causes issues, but <br> is usually fine.
        if (mobileClients) mobileClients.innerHTML = data.general_info.featured_clients_text.replace(/<br\s*\/?>/gi, ' ');
    }
    updateText('dynamic-hero-heading', data.general_info.hero_heading);
    updateText('dynamic-footer-title', "Best DJ in Vizag"); // Keeping static for now or can come from data
    updateText('dynamic-footer-desc', data.general_info.hero_subheading);

    // Update Phone Numbers
    updateText('dynamic-phone-text-2', '[ WhatsApp ]');
    updateText('dynamic-phone-text-3', `Call ${data.general_info.phone}`);
    updateText('dynamic-phone-text-4', data.general_info.phone);

    // Update Email
    if (data.general_info.email) {
        updateText('dynamic-email-text', data.general_info.email);
        updateHref('dynamic-email-link', `mailto:${data.general_info.email}`);
    }

    // Update Address
    if (data.general_info.address) {
        updateText('dynamic-address-text', data.general_info.address);
    }

    // Update Links
    updateHref('dynamic-phone-link-1', `tel:${data.general_info.phone.replace(/\s+/g, '')}`);
    // Remapped dynamic-phone-link-2 to WhatsApp as per user request
    if (data.social_links && data.social_links.whatsapp) {
        updateHref('dynamic-phone-link-2', data.social_links.whatsapp);
    }
    updateHref('dynamic-phone-link-3', `tel:${data.general_info.phone.replace(/\s+/g, '')}`);
    updateHref('dynamic-phone-link-4', `tel:${data.general_info.phone.replace(/\s+/g, '')}`);
    updateHref('dynamic-whatsapp-link', `https://wa.me/${data.general_info.phone.replace(/\D/g, '')}`);

    // Update Social Links
    if (data.social_links) {
        // Helper to update link and visibility
        const updateSocial = (id, url) => {
            const el = document.getElementById(id);
            if (el) {
                if (url) {
                    el.href = url;
                    el.parentElement.style.display = 'block'; // Ensure li is visible
                } else {
                    el.parentElement.style.display = 'none'; // Hide li if no url
                }
            }
        };

        updateSocial('social-link-facebook', data.social_links.facebook);
        updateSocial('social-link-instagram', data.social_links.instagram);

        // WhatsApp (Footer & Mobile)
        updateSocial('dynamic-whatsapp-link', data.social_links.whatsapp);
        updateSocial('social-link-whatsapp-mobile', data.social_links.whatsapp);

        // YouTube (Footer & Mobile)
        updateSocial('dynamic-youtube-link', data.social_links.youtube);
        updateSocial('social-link-youtube-mobile', data.social_links.youtube);
    }

    // Update Media (Hero Slider)
    const heroContainer = document.getElementById('hero-slider-container'); // We will rename the ID in HTML
    // Fallback for old ID or new container
    const videoElement = document.getElementById('dynamic-hero-video');

    // Normalize slider data
    let slides = [];
    if (data.media && data.media.hero_slider && Array.isArray(data.media.hero_slider)) {
        slides = data.media.hero_slider;
    } else if (data.media && data.media.hero_video) {
        // Backward compatibility
        slides = [{ type: 'video', url: data.media.hero_video, duration: 15000 }];
    }

    if (slides.length > 0) {
        // If we found the old video element but have new slider logic, we might need to replace it or use a new container.
        // Best approach: If user hasn't updated HTML yet, content-loader can't easily inject complex structure without a container.
        // We will assume I update index.html to have #hero-slider-container.

        if (heroContainer) {
            heroContainer.innerHTML = ''; // Clear existing

            slides.forEach((slide, index) => {
                const slideEl = document.createElement('div');
                slideEl.className = `hero-slide ${index === 0 ? 'active' : ''}`;
                slideEl.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; transition: opacity 1s ease-in-out; z-index: 0;';
                if (index === 0) slideEl.style.opacity = 1;
                if (index === 0) slideEl.style.zIndex = 1;

                if (slide.type === 'video') {
                    slideEl.innerHTML = `
                        <video muted playsinline style="width: 100%; height: 100%; object-fit: cover;">
                            <source src="${slide.url}" type="video/mp4">
                        </video>
                    `;
                } else {
                    slideEl.innerHTML = `
                        <img src="${slide.url}" style="width: 100%; height: 100%; object-fit: cover;" alt="Hero Slide">
                    `;
                }
                heroContainer.appendChild(slideEl);
            });

            let currentSlide = 0;

            const nextSlide = () => {
                const slidesEls = heroContainer.querySelectorAll('.hero-slide');
                const prevObj = slidesEls[currentSlide];

                // Calculate next
                currentSlide = (currentSlide + 1) % slides.length;
                const nextObj = slidesEls[currentSlide];

                // Transition
                prevObj.style.opacity = 0;
                prevObj.style.zIndex = 0;

                nextObj.style.opacity = 1;
                nextObj.style.zIndex = 1;

                // Video Playback Control
                const prevVideo = prevObj.querySelector('video');
                if (prevVideo) prevVideo.pause();

                const nextVideo = nextObj.querySelector('video');
                if (nextVideo) {
                    nextVideo.currentTime = 0;
                    nextVideo.play().catch(e => console.log("Slide video play error", e));
                }

                // Schedule next
                const nextDuration = slides[currentSlide].duration || 5000;
                setTimeout(nextSlide, nextDuration);
            };

            // Start first video if applicable
            const firstSlide = heroContainer.querySelector('.hero-slide');
            const firstVideo = firstSlide.querySelector('video');
            if (firstVideo) {
                firstVideo.play().catch(e => console.log("Initial slide video play error", e));
            }

            // Start Loop
            if (slides.length > 1) {
                const firstDuration = slides[0].duration || 5000;
                setTimeout(nextSlide, firstDuration);
            } else if (firstVideo) {
                firstVideo.loop = true; // Loop single video
            }
        } else if (videoElement && slides.length > 0 && slides[0].type === 'video') {
            // Fallback: If HTML not updated, just play first video
            const source = videoElement.querySelector('source');
            if (source) {
                source.src = slides[0].url;
                videoElement.load();
            }
        }
    }

    // Setup Background Music
    if (data.media && data.media.background_music) {
        const bgMusic = document.getElementById('bg-music');
        const musicToggle = document.getElementById('music-toggle');

        if (bgMusic && musicToggle) {
            const source = bgMusic.querySelector('source');

            // Normalize to array
            let playlist = [];
            if (Array.isArray(data.media.background_music)) {
                playlist = data.media.background_music;
            } else if (typeof data.media.background_music === 'string' && data.media.background_music) {
                playlist = [{ url: data.media.background_music }];
            }

            if (source && playlist.length > 0) {
                let currentTrackIndex = 0;
                bgMusic.volume = 0.5;
                musicToggle.classList.remove('hidden');
                musicToggle.classList.add('is-muted');

                const playTrack = (index) => {
                    if (index >= playlist.length) index = 0; // Loop playlist
                    currentTrackIndex = index;

                    source.src = playlist[index].url;
                    bgMusic.load();

                    // Only attempt play if toggle says so (handled by click) OR initial autoplay
                    // Ideally we want autoplay on load.
                    const playPromise = bgMusic.play();

                    const headerToggle = document.getElementById('header-music-toggle');
                    const mobileToggle = document.getElementById('mobile-music-toggle');

                    // Helper to update UI
                    const updateUI = (isPlaying) => {
                        [headerToggle, mobileToggle].forEach(btn => {
                            if (btn) {
                                if (isPlaying) {
                                    btn.classList.add('dj-playing');
                                    btn.classList.remove('dj-paused');
                                } else {
                                    btn.classList.add('dj-paused');
                                    btn.classList.remove('dj-playing');
                                }
                            }
                        });
                    };

                    if (playPromise !== undefined) {
                        playPromise.then(() => {
                            musicToggle.classList.remove('is-muted');
                            // Autoplay success: Green
                            updateUI(true);
                        }).catch(error => {
                            console.log("Autoplay blocked or waiting for interaction:", error);
                            // Autoplay failed: Red
                            musicToggle.classList.add('is-muted');
                            updateUI(false);
                        });
                    }
                };

                // Start first track
                playTrack(0);

                // Next track on end
                bgMusic.addEventListener('ended', () => {
                    playTrack(currentTrackIndex + 1);
                });

                // Toggle Handler
                // Music Toggle Logic (DJ Radio Button - Green/Red Status)
                const toggleMusic = (e) => {
                    if (e) e.preventDefault();

                    const headerToggle = document.getElementById('header-music-toggle');
                    const mobileToggle = document.getElementById('mobile-music-toggle');

                    // Helper to update UI
                    const updateUI = (isPlaying) => {
                        [headerToggle, mobileToggle].forEach(btn => {
                            if (btn) {
                                if (isPlaying) {
                                    btn.classList.add('dj-playing');
                                    btn.classList.remove('dj-paused');
                                } else {
                                    btn.classList.add('dj-paused');
                                    btn.classList.remove('dj-playing');
                                }
                            }
                        });
                    };

                    if (bgMusic.paused) {
                        bgMusic.play().then(() => {
                            musicToggle.classList.remove('is-muted');
                            updateUI(true);
                        }).catch(err => {
                            console.log("Play failed:", err);
                            updateUI(false);
                        });
                    } else {
                        bgMusic.pause();
                        musicToggle.classList.add('is-muted');
                        updateUI(false);
                    }
                };

                musicToggle.addEventListener('click', toggleMusic);

                // Bind Header Toggle
                const headerToggle = document.getElementById('header-music-toggle');
                if (headerToggle) {
                    headerToggle.addEventListener('click', toggleMusic);
                }

                // Bind Mobile Toggle
                const mobileToggle = document.getElementById('mobile-music-toggle');
                if (mobileToggle) {
                    mobileToggle.addEventListener('click', toggleMusic);
                }


            }
        }
    }

    // Render Services
    if (data.services) {
        renderServices(data.services);
    }
});

function renderServices(services) {
    const container = document.getElementById('dynamic-services-container');
    if (!container) return;

    // Inject Custom Styles for Mobile Tiled Layout + Show More
    const styleId = 'services-mobile-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = `
            @media screen and (max-width: 767px) {
                /* Force vertical stack (one per row) */
                #dynamic-services-container {
                    display: block !important; 
                }
                .home_work_item {
                    width: 100% !important; /* Full width */
                    margin-bottom: 2rem;
                    grid-column-end: span 1 !important; /* Override explicit grid columns */
                }
                /* Hide items beyond 5 initially */
                .mobile-hidden {
                    display: none !important;
                }
                /* Show More Button Styling */
                .services-show-more-btn {
                    display: table; /* Centers with margin auto */
                    margin: 2rem auto;
                    padding: 0.8rem 2rem;
                    background: white;
                    color: black;
                    border: none;
                    font-weight: bold;
                    text-transform: uppercase;
                    cursor: pointer;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    border-radius: 50px;
                }
            }
            @media screen and (min-width: 768px) {
                .services-show-more-btn {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Render Items
    const itemsHtml = services.map((service, index) => {
        let mediaHtml = '';
        if (service.type === 'video') {
            mediaHtml = `
                <video autoplay loop muted playsinline class="u-cover-absolute" style="object-fit: cover;">
                    <source src="${service.image}" type="video/mp4">
                </video>`;
        } else {
            mediaHtml = `<img loading="lazy" src="${service.image}" alt="${service.title}" class="u-cover-absolute" />`;
        }

        // Add hidden class for 6th item onwards (index 5+)
        const hiddenClass = index >= 5 ? 'mobile-hidden' : '';

        return `
            <div role="listitem" class="home_work_item u-column-3 w-dyn-item ${hiddenClass}">
                <a href="#contact" class="work_item w-inline-block">
                    <div class="work_image_wrap">${mediaHtml}</div>
                    <div class="work_item_info">
                        <div>
                            <div class="work_info_wrap">
                                <div>${service.number}</div>
                                <div>${service.category}</div>
                            </div>
                            <div>
                                <div class="cs_client u-text-style-large u-text-trim-off">${service.title}</div>
                                <div class="cs_title u-text-trim-off">${service.description}</div>
                            </div>
                        </div>
                        <div class="cs_btn_wrap">
                            <div class="cs_btn_text">Book Now</div>
                            <div class="cs_btn_bg"></div>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }).join('');

    container.innerHTML = itemsHtml;

    // Append "Show More" Button if we have hidden items
    if (services.length > 5) {
        const btn = document.createElement('button');
        btn.className = 'services-show-more-btn';
        btn.textContent = 'Show More';
        btn.type = 'button';
        btn.onclick = function () {
            // Reveal items
            const hiddenItems = container.querySelectorAll('.mobile-hidden');
            hiddenItems.forEach(el => el.classList.remove('mobile-hidden'));
            // Hide button
            this.style.display = 'none';
        };
        // Insert after the grid
        container.parentElement.appendChild(btn);
        // Note: container.parentElement is .home_work_component
    }
}

function updateText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        // Check if the element has the 'strong-reveal' animation class
        if (element.classList.contains('strong-reveal')) {
            // If animation has already run, we need to preserve/update the structure
            // The structure is: text node + spans with data-text
            element.innerHTML = `
                ${text}
                <span data-text="${text}"></span>
                <span data-text="${text}"></span>
            `;
            // Ensure is-revealed is present so it's visible
            if (!element.classList.contains('is-revealed')) {
                setTimeout(() => element.classList.add('is-revealed'), 100);
            }
        } else {
            // Standard text update
            element.textContent = text;
        }
    }
}

function updateHref(id, href) {
    const element = document.getElementById(id);
    if (element) {
        element.href = href;
    }
}
