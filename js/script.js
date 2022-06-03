document.querySelector('#input').addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    unsplashRequest();
  }
});

document.querySelector('#loop').addEventListener('click', () => {
  unsplashRequest();
});

function unsplashRequest() {
  document.querySelector('#images').textContent = '';
  
  const value  = document.querySelector('#input').value;
  const url = 
  `https://api.unsplash.com/search/photos?query=${value}
  &per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;

  fetch(url) 
    .then(response => {
      if (!response.ok) { 
        throw Error(response.statusText); 
      }

      return response.json();
    })
    .then(data => {
      loadImages(data);
    })
    .catch(error => console.log('error in getting photos', error));
  }

    const loadImages = (data) => {
      for(let i = 0; i < data.results.length; i++) {
        let image = document.createElement('div');
        image.className = 'img';
        image.style.backgroundImage = "url("+data.results[i].urls.full+")";

        image.addEventListener('dblclick', function() {
          window.open(data.results[i].links.download, '_blank');
        });
        
        document.querySelector('#images').appendChild(image);
      }
    };
  


