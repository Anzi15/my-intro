const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  };

  function callback(entries, observer) {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
          // entry.target.classList.toggle('visible')
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);

  // Observe each section
  document.querySelectorAll('.fade').forEach(section => {
    observer.observe(section);
  });
