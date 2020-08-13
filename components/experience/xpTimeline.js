import styles from '../../styles/experience/XpTimeline.module.scss';
import { Timeline, Popover } from 'antd';

export const XpTimeline = () => {
  const hatemis = (
    <div>
      <span>
        Hatemis is an IT services company in Villeneuve d'Ascq which uses its experience to support SMEs in all stages
        of their IT projects. Our company offers infrastructure solutions (fleet management, outsourcing, engineering,
        etc.).
      </span>
    </div>
  );

  const archimed = (
    <div>
      <span>
        Archimed is editor of Syracuse, a document management and distribution software for libraries, museums and
        archive centers.
      </span>
      <p>
        <ul>
          <li>
            Integrated to an Agile/Scrum team of 15 persons, i contribute to maintain the functionnal evolution of the
            product and participate to analyze product issues as level 3 support. Stack : C# .NET / SQL Server
          </li>
          <li>
            We needed a solution to provide some API documentation for our partners. But, at this moment, we can't use
            swagger with C#/.NET API. So, the idea was to create a swagger like tool, with VueJS and using C#/.NET
            reflection to get code comment inside the project. Stack : VueJS / C# .NET
          </li>
        </ul>
      </p>
    </div>
  );

  const bkConsulting = (
    <p>
      Integrated to an Agile/Scrum team of 6 person, i contribute to maintain the functionnal evolution of the product
      and participate to analyse product issues. Stack : webMethods/Java/SQL Server
    </p>
  );

  const atos = (
    <div>
      <p>Scrum Master on "Mission Zero Accident" project.</p>
      <p>Scrum Master & Full Stack Engineer on "Labplanner/Koela" project.</p>
      <p>Scrum Master on "Auchan SO Lot 10" project.</p>
    </div>
  );

  const map = new Map();
  map.set('Hatemis', hatemis);
  map.set('Archimed', archimed);
  map.set('BKConsulting', bkConsulting);
  map.set('Atos', atos);

  return (
    <div className={styles.timeline}>
      <Timeline mode='alternate' reverse={true}>
        <Timeline.Item position='left' color='#4fc08d'>
          <h3>Sept. 2015</h3>
          Start Software Enginner graduation from EPSI Lille
        </Timeline.Item>
        <Timeline.Item position='right' color='#4fc08d'>
          <span>
            <h3>Oct. 2015 - Sept 2016</h3>
            <Popover placement='leftTop' content={map.get('Hatemis')}>
              Hatemis as Developer (Intership)
            </Popover>
          </span>
        </Timeline.Item>
        <Timeline.Item position='right' color='#4fc08d'>
          <h3>Sept. 2016 - Sept. 2018</h3>
          <Popover placement='leftTop' content={map.get('Archimed')}>
            Archimed as .NET Developer (Intership)
          </Popover>
        </Timeline.Item>
        <Timeline.Item position='left' color='#4fc08d'>
          <h3>Sept. 2018</h3>
          Graduate Software Engineer from EPSI Lille
        </Timeline.Item>
        <Timeline.Item position='right' color='#4fc08d'>
          <h3>Oct. 2018 - Oct. 2019</h3>
          <Popover position='leftTop' content={map.get('BKConsulting')}>
            BK Consulting as Software Engineer
          </Popover>
        </Timeline.Item>
        <Timeline.Item position='right' color='#4fc08d'>
          <h3>Oct. 2019 - Now</h3>
          <Popover position='leftTop' content={map.get('Atos')}>
            Atos DevOps & Digital Campus as Scrum Master & Full Stack Engineer
          </Popover>
        </Timeline.Item>
        <Timeline.Item position='left' color='#4fc08d'>
          <h3>Apr. 2020</h3>
          Creation of Los-Crackitos with <a href='https://twitter.com/jeromepogeant'>@jeromepogeant</a> as co-founder
          <p>Description</p>
        </Timeline.Item>
        <Timeline.Item position='rigth' color='#4fc08d'>
          <h3>May 2020</h3>
          Professional Scrum Master I Certification
        </Timeline.Item>
        <Timeline.Item position='left' color='#4fc08d'>
          <h3>Aug. 2020 </h3>
          Creation of Lille Gophers with <a href='https://twitter.com/jeromepogeant'>@jeromepogeant</a> as co-founder
          <p>Description</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default XpTimeline;
