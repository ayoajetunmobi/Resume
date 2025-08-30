import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/index.jsx"),
    route("form","routes/forms.jsx"),
    route("blogpost/:postName","blog/blogpost.jsx"),
] satisfies RouteConfig;