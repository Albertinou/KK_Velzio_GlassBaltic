import { createClient } from "@sanity/client"

const client = createClient({
    projectId: "mlplm5c7",
    dataset: "production",
    useCdn: true,
    apieVersion: "2023.11.07"
})