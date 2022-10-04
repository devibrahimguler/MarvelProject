function GenerateImageUrl(myData){
    return myData.thumbnail.path.replace('http', 'https') + '.' + myData.thumbnail.extension;
}

export default GenerateImageUrl;
