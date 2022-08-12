const newIdGenerator = (item) => {
    let id = 0;
	return function() {
        id ++
        return `${item}-${id}`
    }
}

const idReneratorPosts = newIdGenerator('posts');
const idReneratorComments = newIdGenerator('comments');


const p1 = idReneratorPosts() // posts-1
const p2 = idReneratorPosts() // posts-2
const p3 = idReneratorPosts() // posts-3


const c1 = idReneratorComments() // comments-1
const c2 = idReneratorComments() // comments-2
const c3 = idReneratorComments() // comments-3

console.log();