import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();
export const category = [
    {
        key: 0,
        name: 'LAPTOP',
        icon: require('../assets/icons/laptop.png')
    },
    {
        key: 1,
        name: 'Vehcile',
        icon: require('../assets/icons/car.png')
    },
    {
        key: 2,
        name: 'CAMERA',
        icon: require('../assets/icons/camera.png')
    },
    {
        key: 3,
        name: 'HOUSE',
        icon: require('../assets/icons/home.png')
    },
    {
        key: 4,
        name: 'ALL',
        icon: require('../assets/icons/window.png'),
        onPress: () => navigation.openDrawer(),
    },
];
export const allProduct = {
    car: [
        {
            key: 5,
            name: 'Rent a car',
            icon: require('../assets/images/car.png'),
           
        },
        {
            key: 6,
            name: 'Lorem Ipsum sit de ell more',
            icon: require('../../assets/car.jpg'),
            rate: '$10/day • $50/week • $90/month'
        },
        {
            key: 7,
            name: 'Lorem Ipsum sit de ell',
            icon: require('../../assets/car2.jpg'),
            rate: '$10/day • $50/week • $90/month'
        },
        {
            key: 8,
            name: 'Lorem Ipsum sit de ell more',
            icon: require('../assets/icons/carsmodel.jpg'),
            rate: '$10/day • $50/week • $90/month'
        },
    ],
    photography: [
        {
            key: 9,
            name: 'Photography',
            icon: require('../assets/images/pic.png'),
        },
        {
            key: 10,
            name: 'Lorem Ipsum sit de ell more',
            icon: require('../../assets/camera1.jpg'),
            rate: '$10/day • $50/week • $90/month'
        },
        {
            key: 11,
            name: 'Lorem Ipsum sit de ell more',
            icon: require('../../assets/retrocamera.jpg'),
            rate: '$10/day • $50/week • $90/month'
        },
        {
            key: 12,
            name: 'Lorem Ipsum sit de ell more',
            icon: require('../../assets/camera2.jpg'),
            rate: '$10/day • $50/week • $90/month'
        },
    ],
}
export const trendingProduct = [
    {
        key: 13,
        name: 'Lorem Ipsum sit de ell more',
        icon: require('../assets/icons/carsmodel.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('productDetail'),
    },
    {
        key: 14,
        name: 'Lorem Ipsum sit  ell more',
        icon: require('../../assets/camera1.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('productDetail'),
    },
    {
        key: 15,
        name: 'Lorem Ipsum  de ell more',
        icon: require('../../assets/house.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('productDetail'),
    },
    {
        key: 16,
        name: 'Lorem Ipsum sit de ell more',
        icon: require('../../assets/carsmodel.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('productDetail'),
    },
];

export const productFeature = [
    {
        title: "km",
        data: 100
    },
    {
        title: "color",
        data: 'black'
    },
    {
        title: "Seats",
        data: 'example'
    },
    {
        title: "Painted",
        data: 'yes'
    },
    {
        title: "km",
        data: 100
    },
    {
        title: "color",
        data: 'black'
    },
    {
        title: "Seats",
        data: 'example'
    },
    {
        title: "Painted",
        data: 'yes'
    },
    {
        title: "km",
        data: 100
    },
    {
        title: "color",
        data: 'black'
    },
    {
        title: "Seats",
        data: 'example'
    },
    {
        title: "Painted",
        data: 'yes'
    },

]
export const lending = [
    {
        key: 13,
        name: 'Lorem Ipsum sit de ell more',
        icon: require('../assets/icons/carsmodel.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('ProductDetail'),
    },
    {
        key: 14,
        name: 'Lorem Ipsum sit  ell more',
        icon: require('../../assets/camera1.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('ProductDetail'),
    },
    {
        key: 15,
        name: 'Lorem Ipsum  de ell more',
        icon: require('../../assets/house.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('ProductDetail'),
    },
    {
        key: 16,
        name: 'Lorem Ipsum sit de ell more',
        icon: require('../../assets/carsmodel.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('ProductDetail'),
    },
    {
        key: 13,
        name: 'Lorem Ipsum sit de ell more',
        icon: require('../assets/icons/carsmodel.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('ProductDetail'),
    },
    {
        key: 14,
        name: 'Lorem Ipsum sit  ell more',
        icon: require('../../assets/camera1.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('ProductDetail'),
    },
    {
        key: 15,
        name: 'Lorem Ipsum  de ell more',
        icon: require('../../assets/house.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('ProductDetail'),
    },
    {
        key: 16,
        name: 'Lorem Ipsum sit de ell more',
        icon: require('../../assets/carsmodel.jpg'),
        rate: '$10/day • $50/week • $90/month',
        onPress: () => navigation.navigate('ProductDetail'),
    },
];

export const messages = [
    {
        id: 1,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
        onPress: () => navigation.navigate('chatting'),
    },
    {
        id: 2,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 3,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 4,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 5,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 6,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 7,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 8,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 9,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 10,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 11,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 12,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    }, {
        id: 13,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 14,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
    {
        id: 15,
        name: 'Item 1',
        icon: require('../../assets/carsmodel.jpg'),
        day: 'Mon',
        p1: 'Person 1',
        p2: 'Hello there, Hope you are doing well...',
        image: require('../assets/icons/rightErrow.png'),
    },
];

export const chatting = [
    {
        isMyMessage: false,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "image",
        imagePath: null,
        message: null,
        time: "15:34",
    },
    {
        isMyMessage: false,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "Okay, let me take a look.",
        imagePath: null,
        time: "15:34",
    },
    {
        isMyMessage: true,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "image",
        imagePath: null,
        message: null,
        time: "15:34",
    },
    {
        isMyMessage: true,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "Please see them and if you need further info tell me.",
        imagePath: null,
        time: "15:34",
    },
    {
        isMyMessage: true,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "Hi, attached is the guide",
        imagePath: null,
        time: "15:34",
    },
    {
        isMyMessage: false,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "How can I help you?",
        imagePath: null,
        time: "15:34",
    },
    {
        isMyMessage: false,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "Hello, my name is George Deglin.",
        imagePath: null,
        time: "15:34",
    },
    {
        isMyMessage: false,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "image",
        imagePath: null,
        message: null,
        time: "15:34",
    },
    {
        isMyMessage: false,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "Okay, let me take a look.",
        imagePath: null,
        time: "15:34",
    },
    {
        isMyMessage: true,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "image",
        imagePath: null,
        message: null,
        time: "15:34",
    },
    {
        isMyMessage: true,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "Please see them and if you need further info tell me.",
        imagePath: null,
        time: "15:34",
    },
    {
        isMyMessage: true,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "Hi, attached is the guide",
        imagePath: null,
        time: "15:34",
    },
    {
        isMyMessage: false,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "How can I help you?",
        imagePath: null,
        time: "15:34",
    },
    {
        isMyMessage: false,
        senderProfilePicPath: require('../../assets/car.jpg'),
        type: "text",
        message: "Hello, my name is George Deglin.",
        imagePath: null,
        time: "15:34",
    },
]