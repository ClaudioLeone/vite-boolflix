import { reactive } from "vue";

export const store = reactive ({
    films: [],
    series: [],
    apiKey: "edbcf579036b742560f87310411fab3b",
    query: "",
    languages: []
});