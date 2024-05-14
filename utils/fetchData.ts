import wrapPromise from "./wrapPromise";

// An example implementation.
// You can implement it in your own way.

// Credit: https://blog.logrocket.com/data-fetching-react-suspense/

function fetchData(url: string): Promise<any> {
	// Can use axios too
	const promise = fetch(url)
		.then((res) => res.json())
		.then((res) => res);

	//console.log(promise);

	return Promise.resolve(wrapPromise(promise));
}

export default fetchData;
