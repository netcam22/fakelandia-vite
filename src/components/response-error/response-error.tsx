export type ResponseErrorProps = {
    errorMessage: string;
}

const ResponseError: React.FC<ResponseErrorProps> = ({errorMessage}) => <>
    <h2 className='response-error'>{errorMessage}</h2>
</>;

export default ResponseError;