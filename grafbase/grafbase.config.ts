import { g, auth, config } from '@grafbase/sdk'


const User = g.model("User", {
  email: g.email().unique(),
  name: g.string().length({ max: 30, min: 2 }),
  profileImage: g.url(),
  avatar: g.string(),
  githubUrl: g.string().optional(),
  linkedinUrl: g.string().optional(),
  projects: g.relation(() => Projects).list().optional(),
})

const Projects = g.model("Project", {
  title: g.string().length({ min: 4 }),
  description: g.string(),
  imageUrl: g.string(),
  liveSiteUrl: g.string().optional(),
  githubUrl: g.string().optional(),
  category: g.string().search(),
  createBy: g.relation(() => User)
})

export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
