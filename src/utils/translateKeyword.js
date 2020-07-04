export const translateKeyword = key => {
    switch (key) {
        case 'name' || 'title':
            return 'Название';
        case 'description':
            return 'Описание';
        case 'price' :
            return 'Цена';
        case 'title':
            return 'Название';
        default:
            return key
    }
};
