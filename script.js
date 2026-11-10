document.addEventListener('DOMContentLoaded', () => {
  
  const customSelect = document.querySelector('.projects__sorting');
  const selectBtn = document.querySelector('.projects__sorting-button');
  const selectText = document.querySelector('.projects__sorting-text');
  const dropdownOptions = document.querySelectorAll('.projects__sorting-select li');

  
  function toggleSelect() {
    
    const isOpen = customSelect.classList.contains('is-open');

    if (isOpen) {
      
      customSelect.classList.remove('is-open');
      selectBtn.setAttribute('aria-expanded', 'false');
    } else {
      
      customSelect.classList.add('is-open');
      selectBtn.setAttribute('aria-expanded', 'true');
    }
  }

  
  selectBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    toggleSelect();
  });

  
  dropdownOptions.forEach(option => {
    option.addEventListener('click', () => {
      
      const selectedYear = option.textContent;

      
      selectText.textContent = selectedYear;

      
      dropdownOptions.forEach(li => li.classList.remove('is-active'));
      option.classList.add('is-active');

      
      customSelect.classList.remove('is-open');
      selectBtn.setAttribute('aria-expanded', 'false');
    });
  });


  window.addEventListener('click', () => {
    if (customSelect.classList.contains('is-open')) {
      customSelect.classList.remove('is-open');
      selectBtn.setAttribute('aria-expanded', 'false');
    }
  });
});


const mobileOverlay = document.getElementById('mobileOverlay');

const mobileLinks = mobileOverlay.querySelectorAll('a');


mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileOverlay.close(); 
  });
});
