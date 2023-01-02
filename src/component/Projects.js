import { Col, Container, Nav, Row, TabContainer,Tab, TabContent, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import proj1Img1 from "../assets/img/project-img1.png"
import proj1Img2 from "../assets/img/project-img2.png"
import proj1Img3 from "../assets/img/project-img3.png"

export const Projects = () => {
        const projects = [
            {
                title: "Log file Analysis",
                description: "Log file Analysis Description",
                imgUrl: proj1Img1,
            },
            {
                title: "Log file Analysis",
                description: "Log file Analysis Description",
                imgUrl: proj1Img1,
            },
            {
                title: "Log file Analysis",
                description: "Log file Analysis Description",
                imgUrl: proj1Img1,
            },
            {
                title: "Log file Analysis",
                description: "Log file Analysis Description",
                imgUrl: proj1Img1,
            },
        ];
        return(
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum</p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item> 
                                <Nav.Link eventKey="first">Tab one</Nav.Link>
                            </Nav.Item>
                            <Nav.Item> 
                                <Nav.Link eventKey="second">Tab two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item> 
                                <Nav.Link eventKey="third">Tab three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <TabPane eventKey="second">LALALALLA</TabPane>
                            <TabPane eventKey="third">LALALALLA221213</TabPane>
                        </TabContent>
                        </TabContainer>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}></img>

            </section>
        )
}