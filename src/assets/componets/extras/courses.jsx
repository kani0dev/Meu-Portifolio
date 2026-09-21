import { Card, List, Typography } from "antd";
import { Header } from "antd/es/layout/layout";

const CoursesSection = () => {
    const courses = [ 
      'Foundadations of Cybersecurity - google - coursera',
      'Google Cloud Computing Foundations - google - coursera'
    ]
    return (
      <List
        header={
          <Typography.Text
          strong
          >
            Cursos
          </Typography.Text>
        }
        bordered
        dataSource={courses}
        renderItem={(item)=>(
          <List.Item>
            <Typography.Text>
              {item}
            </Typography.Text>
          </List.Item>
        )}
      />
    )
}
export default CoursesSection;