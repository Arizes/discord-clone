const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLSchema } = require("graphql");

const ChannelsType = new GraphQLObjectType({
    name: "ChannelsType",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
    })
})

const MembersType = new GraphQLObjectType({
    name: "MembersType",
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
    })
})
const GuildType = new GraphQLObjectType({
    name: "GuildType",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        owner: { type: GraphQLString },
        icon: { type: GraphQLString },
        permissions: { type: GraphQLString },
        channels: {
            type: new GraphQLList(ChannelsType),
            resolve(parent, args) {
                return []
            }
        },
        // roles: {
        //     type: new GraphQLList(RolesType),
        //     resolve(parent, args) {
        //         return []
        //     }
        // },
        members: {
            type: new GraphQLList(MembersType),
            resolve(parent, args) {
                return []
            }
        },
    })
})
const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        guilds: {
            type: new GraphQLList(GuildType),
            resolve(parent, args, request) {
                return {}
            }
        },
        // friends: {
        //     type: new GraphQLList(FriendsType),
        //     resolve(parent, args) {
        //         return []
        //     }
        // },
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getUser: {
            type: UserType,
            resolve(parent, args, req) {
                console.log(req.session)
                return {}
                return req.user ? req.user : null
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery })