// Gallery functionality with filtering and lightbox
class GalleryManager {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.gallerySections = document.querySelectorAll('.gallery-section');
        this.mediaItems = document.querySelectorAll('.media-item');
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = document.getElementById('lightbox-img');
        this.lightboxVideo = document.getElementById('lightbox-video');
        this.lightboxCaption = document.querySelector('.lightbox-caption');
        this.currentMediaIndex = 0;
        this.currentMediaArray = [];

        this.init();
    }

    init() {
        this.setupFilters();
        this.setupLightbox();
        this.setupMediaItems();
        this.showAllSections();
    }

    setupFilters() {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                this.filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                this.filterGallery(filter);
            });
        });
    }

    filterGallery(filter) {
        if (filter === 'all') {
            this.showAllSections();
        } else if (filter === 'year') {
            this.showOnlyYear();
        } else if (filter === 'theme') {
            this.showOnlyTheme();
        }
    }

    showAllSections() {
        this.gallerySections.forEach(section => {
            section.classList.remove('hidden');
        });
    }

    showOnlyYear() {
        this.gallerySections.forEach(section => {
            if (section.dataset.category === 'year') {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }

    showOnlyTheme() {
        this.gallerySections.forEach(section => {
            if (section.dataset.category === 'theme') {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }

    setupMediaItems() {
        this.mediaItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.openLightbox(item, index);
            });
        });
    }

    setupLightbox() {
        const closeBtn = document.querySelector('.lightbox-close');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');

        closeBtn.addEventListener('click', () => this.closeLightbox());
        prevBtn.addEventListener('click', () => this.showPreviousMedia());
        nextBtn.addEventListener('click', () => this.showNextMedia());

        // Close on background click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') {
                this.closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                this.showPreviousMedia();
            } else if (e.key === 'ArrowRight') {
                this.showNextMedia();
            }
        });
    }

    openLightbox(item, index) {
        this.currentMediaIndex = index;
        this.currentMediaArray = Array.from(this.mediaItems);

        const caption = item.querySelector('.media-caption').textContent;
        this.lightboxCaption.textContent = caption;

        if (item.classList.contains('video-item')) {
            const videoSrc = item.querySelector('video').src;
            this.lightboxVideo.src = videoSrc;
            this.lightboxVideo.style.display = 'block';
            this.lightboxImg.style.display = 'none';
        } else {
            const imgSrc = item.querySelector('img').src;
            this.lightboxImg.src = imgSrc;
            this.lightboxImg.style.display = 'block';
            this.lightboxVideo.style.display = 'none';
            this.lightboxVideo.pause();
        }

        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        this.lightboxVideo.pause();
        this.lightboxVideo.src = '';
        this.lightboxImg.src = '';
        document.body.style.overflow = '';
    }

    showNextMedia() {
        this.currentMediaIndex = (this.currentMediaIndex + 1) % this.currentMediaArray.length;
        const nextItem = this.currentMediaArray[this.currentMediaIndex];

        // Close and reopen with new item
        this.lightbox.classList.remove('active');
        setTimeout(() => {
            this.openLightbox(nextItem, this.currentMediaIndex);
        }, 50);
    }

    showPreviousMedia() {
        this.currentMediaIndex = (this.currentMediaIndex - 1 + this.currentMediaArray.length) % this.currentMediaArray.length;
        const prevItem = this.currentMediaArray[this.currentMediaIndex];

        // Close and reopen with new item
        this.lightbox.classList.remove('active');
        setTimeout(() => {
            this.openLightbox(prevItem, this.currentMediaIndex);
        }, 50);
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new GalleryManager();
});
