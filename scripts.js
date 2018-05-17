console.log('Script running...')
feather.replace()

document.getElementsByClassName('card-expandable')[0]
  .addEventListener('click', function(e) {
   
    var cssSelectorOne = anime({
      targets: document.getElementsByClassName('card-expandable')[0],
      easing: 'easeInOutExpo',
      duration: 400,
      padding: '20px'
    });
    var cssSelectorTwo = anime({
      targets: document.getElementsByClassName('card-expandable-header')[0].childNodes[1],
      duration: 400,
      easing: 'easeInOutExpo',
      fontSize: '24px',
    });

    console.log('logging', document.getElementsByClassName('card-expandable-header')[0].childNodes[1])
    var cssSelectorThree = anime({
      targets: document.getElementsByClassName('card-expandable')[0].childNodes[3],
      duration: 400,
      easing: 'easeInOutExpo',
      height: '300px',
      fontSize: '16px',
    });
  })