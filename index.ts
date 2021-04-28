import {APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler} from "aws-lambda";

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    return {
        statusCode: 200,
        body: JSON.stringify('This is the shit!')
    };
}
