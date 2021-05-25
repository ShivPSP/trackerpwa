import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo";
import InputValue from "../components/inputValue";
import localForage from 'localforage';
import swRegister from "../../swRegister.js";


const usersInstance = localForage.createInstance({
    name: "users"
});

export const addUsers = async (newUsers) => {
    await newUsers.map((item) => usersInstance.setItem(item.id, item));

};

/// Method to fetch the users from indexedDB

export const getUsers = async (searchValue) => {
    // const keys = (await usersInstance.keys()).reverse();

    const results = await usersInstance.getItem(searchValue);
    //const results = await usersInstance.getItem(keys);

    console.log(results);
    return results
}

/// Function to add the REST URL in the browser cache

export const addUsersCache = async (item) => {
    const userPageUrl = `https://jsonplaceholder.typicode.com/users/${item.id}`;
    const cache = await window.caches.open("userDetailsCachePageV1");
    const response = await cache.match(userPageUrl);
    if (!response) cache.add(new Request(userPageUrl));

}

swRegister();


const Tracker = () => (
    <Layout>
        <Seo title="Home" />

        <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{
                marginBottom: `1.45rem`,
                marginLeft: `30%`
            }}
        />

        <InputValue />
    </Layout>

)

export default Tracker