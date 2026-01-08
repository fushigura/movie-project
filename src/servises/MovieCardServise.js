const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
const options = {
    method: "GET",
    headers: {accept: 'application/json',  
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTZiZGZhOGQ4ZmU4ZGZjNjBkNzA3MzgwNWE0ZGZjNyIsIm5iZiI6MTc2NzI3MDg2Ni45OSwic3ViIjoiNjk1NjY5ZDI0NWRkNDgwMzU0Y2M4NjQ0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.J74uaHW3Gg6IoUUvTGZJRRqW-ztrxL-3tynlkmH3fpY'}
}

