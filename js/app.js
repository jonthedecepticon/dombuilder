(function () {
  'use strict'
  var { domBuilder } = window

  // Routing
  window.onhashchange = function () {
    if (!window.location.hash) window.location.hash = '#files'
    setCurrent(window.location.hash)
  }
  window.onload = window.onhashchange
  
  function setCurrent(url) {
    switch(url) {
      case '#shared':
        document.body.innerText = "";
        document.body.appendChild(SideNavComponent())
        document.body.appendChild(TopNavComponent())
        document.body.appendChild(SharedTemplate())
        document.body.appendChild(DetailsComponent())
        break
      case '#music':
        document.body.innerText = "";
        document.body.appendChild(SideNavComponent())
        document.body.appendChild(TopNavComponent())
        document.body.appendChild(MusicTemplate())
        document.body.appendChild(DetailsComponent())
        break
      case '#photos':
        document.body.innerText = "";
        document.body.appendChild(SideNavComponent())
        document.body.appendChild(TopNavComponent())
        document.body.appendChild(PhotosTemplate())
        document.body.appendChild(DetailsComponent())
        break
      default:
        document.body.innerText = "";
        document.body.appendChild(SideNavComponent())
        document.body.appendChild(TopNavComponent())
        document.body.appendChild(FilesTemplate())
        document.body.appendChild(DetailsComponent())
    }
  }

  // Components
  function SideNavComponent () {
    var $ = {}
    return domBuilder([
      ['ul.menu$nav',
        ['li.selected', ['a', { href: '#files' }, 'Files']],
        ['li', ['a', { href: '#shared' }, 'Shared']],
        ['li', ['a', { href: '#photos' }, 'Photos']],
        ['li', ['a', { href: '#music' }, 'Music']]
      ]
    ], $)
  }

  function TopNavComponent () {
    var $ = {}
    return domBuilder([
      ['h6.navbar', 'TOP'
      ]
    ], $)
  }

  function DetailsComponent () {
    var $ = {}
    return domBuilder([
      ['h6.details', 'RIGHT'
      ]
    ], $)
  }

  // Templates
  function FilesTemplate () {
    var $ = {}
    return domBuilder([
      ['.container',
        ['h1', 'FILES Page']
      ]
    ], $)
  }

  function PhotosTemplate () {
    var $ = {}
    return domBuilder([
      ['.container',
        ['h1', 'PHOTOS Page']
      ]
    ], $)
  }

  function MusicTemplate () {
    var $ = {}
    return domBuilder([
      ['.container',
        ['h1', 'MUSIC Page']
      ]
    ], $)
  }

  function SharedTemplate () {
    var $ = {}
    return domBuilder([
      ['.container',
        ['h1', 'SHARED Page']
      ]
    ], $)
  }
})()
