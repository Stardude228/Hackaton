import React from 'react'
import { 
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
    ButtonGroup, 
    Button,
} from 'reactstrap'
import { useHistory } from 'react-router-dom';

function HomeCardColumns(props) {

    const { item } = props;
    // console.log(props);

    const history = useHistory();


    // const item = props.props.data;
    // console.log(item)


    // const handleProductDetail = (id) => {
    //     history.replace(`/posts/${item + [id]}`)
    // }

    return (
        <Card className="mt-4">
            <CardImg top width="100%" src={item.image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardSubtitle>Little info about {item.title}</CardSubtitle>
                <CardText>{item.comment}</CardText>
                <ButtonGroup>
                    <Button>Get more info</Button>
                    <Button color="primary">Purchase {item.price}</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    )
}
            
export default HomeCardColumns
