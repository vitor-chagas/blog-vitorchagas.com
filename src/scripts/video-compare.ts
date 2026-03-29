function initVideoCompare() {
  const allContainers = document.querySelectorAll('.video-compare');

  allContainers.forEach(container => {
    if ((container as HTMLElement).dataset.initialized) return;
    (container as HTMLElement).dataset.initialized = 'true';

    const videos = Array.from(container.querySelectorAll('video'));
    const btn = container.querySelector('.video-sound-toggle') as HTMLElement | null;
    if (videos.length < 2 || !btn) return;

    const primary = videos[0];
    const secondary = videos[1];

    // Light sync: only correct if videos drift significantly
    setInterval(() => {
      if (Math.abs(primary.currentTime - secondary.currentTime) > 0.5) {
        secondary.currentTime = primary.currentTime;
      }
    }, 3000);

    const iconMuted = btn.querySelector('.icon-muted') as HTMLElement | null;
    const iconUnmuted = btn.querySelector('.icon-unmuted') as HTMLElement | null;

    btn.addEventListener('click', () => {
      const willUnmute = primary.muted;

      if (willUnmute) {
        // Mute all other video-compare sections first
        allContainers.forEach(other => {
          if (other === container) return;
          const otherVideos = other.querySelectorAll('video');
          const otherBtn = other.querySelector('.video-sound-toggle') as HTMLElement | null;
          otherVideos.forEach(v => { v.muted = true; });
          if (otherBtn) {
            const otherMutedIcon = otherBtn.querySelector('.icon-muted') as HTMLElement | null;
            const otherUnmutedIcon = otherBtn.querySelector('.icon-unmuted') as HTMLElement | null;
            if (otherMutedIcon) otherMutedIcon.style.display = 'block';
            if (otherUnmutedIcon) otherUnmutedIcon.style.display = 'none';
          }
        });
      }

      primary.muted = !willUnmute;
      secondary.muted = true; // always keep secondary muted
      if (willUnmute) primary.play();

      if (iconMuted && iconUnmuted) {
        iconMuted.style.display = willUnmute ? 'none' : 'block';
        iconUnmuted.style.display = willUnmute ? 'block' : 'none';
      }
    });

    // Hover effect
    btn.addEventListener('mouseenter', () => btn.style.background = 'rgba(0,0,0,0.75)');
    btn.addEventListener('mouseleave', () => btn.style.background = 'rgba(0,0,0,0.55)');
  });
}

document.addEventListener('astro:page-load', () => {
  initVideoCompare();
});
