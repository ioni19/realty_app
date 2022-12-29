const test = [
  {
    id: 1,
    name: '오산원동힐스테이트',
    info: {
      space: '118m²(36평)',
      prediction: -10,
      sellingPrice: 4.0,
      jeonsePrice: 4.8,
      graphImg: '',
      realImg:
        'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  },
  {
    id: 2,
    name: '우림',
    info: {
      space: '73m²(22평)',
      prediction: -13,
      sellingPrice: 1.9,
      jeonsePrice: 1.5,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 3,
    name: '갈곶피오레',
    info: {
      space: '120m²(36평)',
      prediction: -12,
      sellingPrice: 3.6,
      jeonsePrice: 2.9,
      graphImg: '',
      realImg:
        'https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  },
  {
    id: 4,
    name: '원동두산, 동아',
    info: {
      space: '110m²(33평)',
      prediction: -4,
      sellingPrice: 3.6,
      jeonsePrice: 2.0,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 5,
    name: '오산대동다숲',
    info: {
      space: '83m²(25평)',
      prediction: -7,
      sellingPrice: 2.1,
      jeonsePrice: 1.7,
      graphImg: '',
      realImg:
        'https://cdn.pixabay.com/photo/2015/05/27/12/32/seoul-786574__480.jpg',
    },
  },
  {
    id: 6,
    name: '화성병점SK뷰',
    info: {
      space: '156m²(47평)',
      prediction: -16,
      sellingPrice: 5.1,
      jeonsePrice: 3.2,
      graphImg: '',
      realImg:
        'https://cdn.pixabay.com/photo/2017/09/12/13/41/sun-2742346__480.jpg',
    },
  },
  {
    id: 7,
    name: '미소지움',
    info: {
      space: '85m²(26평)',
      prediction: -6,
      sellingPrice: 3.7,
      jeonsePrice: 2.2,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 8,
    name: '이화',
    info: {
      space: '88m²(27평)',
      prediction: -8,
      sellingPrice: 1.1,
      jeonsePrice: 0.9,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 9,
    name: '동부삼환',
    info: {
      space: '77m²(23평)',
      prediction: -14,
      sellingPrice: 2.2,
      jeonsePrice: 1.9,
      graphImg: '',
      realImg:
        'https://cdn.pixabay.com/photo/2018/03/24/03/45/structure-3255638__480.jpg',
    },
  },
  {
    id: 10,
    name: '제일하이빌2차',
    info: {
      space: '96m²(29평)',
      prediction: -7,
      sellingPrice: 3.3,
      jeonsePrice: 1.7,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 11,
    name: '평택장당우미이노스빌 1차',
    info: {
      space: '115m²(35평)',
      prediction: -9,
      sellingPrice: 3.4,
      jeonsePrice: 2.1,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 12,
    name: '평택장당우미이노스빌 5차',
    info: {
      space: '108m²(33평)',
      prediction: -7,
      sellingPrice: 4.6,
      jeonsePrice: 3.8,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 13,
    name: '평택장당우미이노스빌 3차',
    info: {
      space: '172m²(52평)',
      prediction: -9,
      sellingPrice: 4.6,
      jeonsePrice: 3.8,
      graphImg: '',
      realImg:
        'https://cdn.pixabay.com/photo/2018/06/02/16/35/korea-3448689__480.jpg',
    },
  },
  {
    id: 14,
    name: '한일',
    info: {
      space: '81m²(24평)',
      prediction: -1,
      sellingPrice: 1.7,
      jeonsePrice: 2.0,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 15,
    name: '경기',
    info: {
      space: '81m²(24평)',
      prediction: -7,
      sellingPrice: 1.5,
      jeonsePrice: 0.8,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 16,
    name: '제이하이빌1차',
    info: {
      space: '93m²(28평)',
      prediction: -9,
      sellingPrice: 3.5,
      jeonsePrice: 2.7,
      graphImg: '',
      realImg:
        'https://cdn.pixabay.com/photo/2020/06/26/06/24/building-5341792__480.jpg',
    },
  },
  {
    id: 17,
    name: '성지',
    info: {
      space: '65m²(20평)',
      prediction: -7,
      sellingPrice: 0.7,
      jeonsePrice: 0.6,
      graphImg: '',
      realImg:
        'https://cdn.pixabay.com/photo/2019/09/28/16/16/busan-building-4511204__480.jpg',
    },
  },
  {
    id: 18,
    name: '우경싸이트빌',
    info: {
      space: '38m²(11평)',
      prediction: -6,
      sellingPrice: 0.8,
      jeonsePrice: 0.9,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 19,
    name: '평택장당우미이노스빌 2차',
    info: {
      space: '115m²(35평)',
      prediction: -11,
      sellingPrice: 3.6,
      jeonsePrice: 2.1,
      graphImg: '',
      realImg: '',
    },
  },
  {
    id: 20,
    name: '삼익',
    info: {
      space: '84m²(26평)',
      prediction: -3,
      sellingPrice: 1.9,
      jeonsePrice: 1.7,
      graphImg: '',
      realImg:
        'https://cdn.pixabay.com/photo/2017/09/28/13/26/sky-2795517__480.jpg',
    },
  },
];

export default test;
