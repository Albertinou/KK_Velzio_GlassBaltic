import { createClient }  from "@sanity/client"

export const client = createClient({
    projectId: "mlplm5c7",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-11-07"
})