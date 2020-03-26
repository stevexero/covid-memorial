if (document.querySelector('.fa-bars')) {
  document.querySelector('.fa-bars').addEventListener('click', function() {
    loadOverlay();
  });
}

if (document.querySelector('.fa-times')) {
  document.querySelector('.fa-times').addEventListener('click', function() {
    removeOverlay();
  });
}

function loadOverlay() {
  console.log('Overlay Loaded');
  document.querySelector('.fa-bars').style.display = 'none';
  document.querySelector('.fa-times').style.display = 'block';
  document.querySelector('.mobile-form').style.display = 'block';
}

function removeOverlay() {
  console.log('Overlay Removed');
  document.querySelector('.fa-bars').style.display = 'block';
  document.querySelector('.fa-times').style.display = 'none';
  document.querySelector('.mobile-form').style.display = 'none';
}
