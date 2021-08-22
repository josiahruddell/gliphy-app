import rewire from "rewire"
const gliphy_api = rewire("./gliphy-api")
const fetchJson = gliphy_api.__get__("fetchJson")
// @ponicode
describe("fetchJson", () => {
    test("0", async () => {
        await fetchJson("http://www.example.com/route/123?foo=bar")
    })

    test("1", async () => {
        await fetchJson("https://")
    })

    test("2", async () => {
        await fetchJson("ponicode.com")
    })

    test("3", async () => {
        await fetchJson("www.google.com")
    })

    test("4", async () => {
        await fetchJson("https://twitter.com/path?abc")
    })

    test("5", async () => {
        await fetchJson("")
    })
})

// @ponicode
describe("gliphy_api.fetchTrending", () => {
    test("0", async () => {
        await gliphy_api.fetchTrending({ limit: 1 })
    })

    test("1", async () => {
        await gliphy_api.fetchTrending({ limit: 5 })
    })

    test("2", async () => {
        await gliphy_api.fetchTrending({ limit: 20 })
    })

    test("3", async () => {
        await gliphy_api.fetchTrending({ limit: 3 })
    })

    test("4", async () => {
        await gliphy_api.fetchTrending({ limit: 50 })
    })

    test("5", async () => {
        await gliphy_api.fetchTrending({ limit: -Infinity })
    })
})

// @ponicode
describe("gliphy_api.fetchSearch", () => {
    test("0", async () => {
        await gliphy_api.fetchSearch({ q: "Spectacled Caiman", limit: 3, offset: 2 })
    })

    test("1", async () => {
        await gliphy_api.fetchSearch({ q: "Australian Freshwater Crocodile", limit: 3, offset: 0 })
    })

    test("2", async () => {
        await gliphy_api.fetchSearch({ q: "Spectacled Caiman", limit: 5, offset: 4 })
    })

    test("3", async () => {
        await gliphy_api.fetchSearch({ q: "Spectacled Caiman", limit: 1, offset: 1 })
    })

    test("4", async () => {
        await gliphy_api.fetchSearch({ q: "Spectacled Caiman", limit: 3, offset: 512 })
    })

    test("5", async () => {
        await gliphy_api.fetchSearch({ q: "", limit: -Infinity, offset: -Infinity })
    })
})
