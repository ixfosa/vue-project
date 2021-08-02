
export function getRecommend () {
  let recommends = [
    {
      picUrl: 'http://p1.music.126.net/Zn3H6r-NKXAjdYrE3A4hrg==/109951166237595313.jpg?imageView&quality=89',
      linkUrl: 'https://music.163.com/song?id=1861915907'
    },
    {
      picUrl: 'http://p1.music.126.net/ss0nRCSNJCdY6Dt7_NV1xw==/109951166238905046.jpg?imageView&quality=89',
      linkUrl: 'https://music.163.com/song?id=1865165968'
    },
    {
      picUrl: 'http://p1.music.126.net/gD-KWR0G_3GYIgpUzKA9cg==/109951166237604442.jpg?imageView&quality=89',
      linkUrl: 'https://music.163.com/song?id=1851048378'
    },
    {
      picUrl: 'http://p1.music.126.net/gD-KWR0G_3GYIgpUzKA9cg==/109951166237604442.jpg?imageView&quality=89',
      linkUrl: 'https://music.163.com/song?id=1864903283'
    },
    {
      picUrl: 'http://p1.music.126.net/qjx3MESipMyDKMyc04nB1w==/109951166237625313.jpg?imageView&quality=89',
      linkUrl: 'https://music.163.com/song?id=1864814232'
    }
  ]
  return Promise.resolve(recommends)
}

export function getDiscList () {
  let discList = [
    {
      imgurl: 'https://qpic.y.qq.com/music_cover/S0ic8e816DmKBYfOJtrICHlic3N9EXibfFAV0ExZvO7ibNEkDRgFwOzWGg/600?n=1',
      name: '上分必备',
      dissname: '身法操作不可少的BGM'
    },
    {
      imgurl: 'https://qpic.y.qq.com/music_cover/oLU121BePGnD2tjrMP6P5EBlxSPeg6MtCzcmkJX3XOTm8icx2En8S5A/600?n=1',
      name: '怀念旧时光',
      dissname: '100首精选粤语歌'
    },
    {
      imgurl: 'https://qpic.y.qq.com/music_cover/W1MtWGqfia8HlVLot7W9WN8xJ5AYml0SNBNticuaS3Daib5VwYib2uAlUg/600?n=1',
      name: '流行',
      dissname: '一秒倾心的神仙歌曲'
    },
    {
      imgurl: 'https://qpic.y.qq.com/music_cover/dicMNCQtUCg1bFlayhR6JJ0StV8e0dicoiciaGDjuxQJoLibELjmNvS2q4g/600?n=1',
      name: '治愈纯音乐',
      dissname: '所遇皆温柔 ♡'
    },
    {
      imgurl: 'https://qpic.y.qq.com/music_cover/FZN9m5MCZXiaJfw00k0CyQrqTicLglGZeicqeAM1Sia0Nfsll8koGPzTFQ/600?n=1',
      name: '轻柔小众',
      dissname: '愿你遇见所有的甜'
    },
    {
      imgurl: 'https://qpic.y.qq.com/music_cover/DhpicvGxCZozibtVUC0Q03Oia0h9DnKUNHPOr7jZaVGgnJv4htsMP5Eh47JLj1WHFOH/600?n=1',
      name: '深情翻唱',
      dissname: '都说入戏的人最深情'
    }
  ]
  return Promise.resolve(discList)
}
