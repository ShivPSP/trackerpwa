export default async () => {
    if (!("serviceWorkers" in navigator)) {
        return;
    }

    const swRegistration = await navigator.serviceWorker.register("sw.js");
    console.log(swRegistration);

}
