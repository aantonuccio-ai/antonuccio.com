// Video rotation functionality with smooth crossfade
class VideoRotator {
    constructor(videoSources) {
        this.videoSources = videoSources;
        this.currentIndex = 0;
        this.videoElement = document.getElementById('familyVideo');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicatorsContainer = document.getElementById('videoIndicators');
        this.autoRotateInterval = null;
        this.autoRotateDelay = 15000; // 15 seconds per video
        this.isTransitioning = false;

        this.init();
    }

    init() {
        this.createIndicators();
        this.attachEventListeners();
        this.updateIndicators();
        this.startAutoRotate();
    }

    createIndicators() {
        this.videoSources.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.dataset.index = index;
            indicator.addEventListener('click', () => this.goToVideo(index));
            this.indicatorsContainer.appendChild(indicator);
        });
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            this.previousVideo();
            this.resetAutoRotate();
        });

        this.nextBtn.addEventListener('click', () => {
            this.nextVideo();
            this.resetAutoRotate();
        });

        this.indicatorsContainer.addEventListener('click', () => {
            this.resetAutoRotate();
        });
    }

    updateIndicators() {
        const indicators = this.indicatorsContainer.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    changeVideo(newIndex) {
        if (newIndex === this.currentIndex || newIndex < 0 || newIndex >= this.videoSources.length || this.isTransitioning) {
            return;
        }

        this.isTransitioning = true;

        // Fade out current video
        this.videoElement.classList.add('fading');

        // Wait for fade out, then change source and fade in
        setTimeout(() => {
            this.currentIndex = newIndex;
            this.videoElement.src = this.videoSources[this.currentIndex];
            this.videoElement.load();

            // Wait for video to be ready to play
            this.videoElement.addEventListener('canplay', () => {
                this.videoElement.play();

                // Small delay before fading in
                setTimeout(() => {
                    this.videoElement.classList.remove('fading');
                    this.isTransitioning = false;
                }, 50);
            }, { once: true });

            this.updateIndicators();
        }, 600); // Match fade out duration in CSS (1.2s / 2)
    }

    nextVideo() {
        const nextIndex = (this.currentIndex + 1) % this.videoSources.length;
        this.changeVideo(nextIndex);
    }

    previousVideo() {
        const prevIndex = (this.currentIndex - 1 + this.videoSources.length) % this.videoSources.length;
        this.changeVideo(prevIndex);
    }

    goToVideo(index) {
        this.changeVideo(index);
    }

    startAutoRotate() {
        this.autoRotateInterval = setInterval(() => {
            this.nextVideo();
        }, this.autoRotateDelay);
    }

    resetAutoRotate() {
        clearInterval(this.autoRotateInterval);
        this.startAutoRotate();
    }

    stopAutoRotate() {
        clearInterval(this.autoRotateInterval);
    }
}

// Initialize the video rotator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Define your video sources here
    // Replace these with your actual video file paths
    const videoSources = [
        'videos/video1.mp4',
        'videos/video2.mp4',
        'videos/video3.mp4'
    ];

    // Initialize the rotator
    const rotator = new VideoRotator(videoSources);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            rotator.previousVideo();
            rotator.resetAutoRotate();
        } else if (e.key === 'ArrowRight') {
            rotator.nextVideo();
            rotator.resetAutoRotate();
        }
    });
});
