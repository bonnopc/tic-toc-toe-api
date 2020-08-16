// Importing Configuration Files
import { ApolloServer, gql } from 'apollo-server-hapi';
import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import { formatError }  from '../helper';
// import GraphqlSchema from "../graphql/schema.graphql";
import resolvers from "../graphql/resolver"

const InitApolloServer = async (app) => {
    try {
        // Merge all resolvers file
        // const ResolvesArray = [
        //     ...fileLoader(path.join(__PROJECTPATH, '../src/graphQL/resolver/common')),
        //     ...fileLoader(path.join(__dirname, '../**/services/**/graphQL/resolver.js'))
        // ];
        // const resolvers = mergeResolvers(ResolvesArray);

        // // Merge all schemas file
        const TypesArray = [
            ...fileLoader(path.join(__dirname, '../graphql/schema.graphql'))
        ];
        const GraphqlSchemas = mergeTypes(TypesArray, { all: true });
        const typeDefs = gql`${GraphqlSchemas}`;

        // const CombinedTypesArray = [
        //     ...fileLoader(path.join(__dirname, '../**/services/**/graphQL/schema.graphql'))
        // ];
        // const CombinedGraphqlSchemas = mergeTypes(CombinedTypesArray, { all: true });
        // await mkdirp(path.join(__dirname,`../combined-schema/${process.env.PRODUCT_SERVICE_NAME}`));
        // writeFileSync(path.join(__dirname,`../combined-schema/${process.env.PRODUCT_SERVICE_NAME}/schema.graphql`), CombinedGraphqlSchemas);
        
        // console.log("typeDefs",JSON.stringify(typeDefs))
        


        const serverApollo = new ApolloServer({
            typeDefs,
            resolvers,
            formatError: (error) => {
                console.error('error----------->', error);
                return formatError(error);
            },
        });
        await serverApollo.applyMiddleware({ app });

        await serverApollo.installSubscriptionHandlers(app.listener);
    }
    catch (error) {
        console.error('Error on apollo server!', error);
    }
};

export default InitApolloServer;