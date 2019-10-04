import React, { useState, useEffect } from "react"
import styles from "./index.module.scss"
import Layout from "src/components/layout"
import Card from "src/components/card"
import SEO from "src/components/seo"
import { graphql } from 'gatsby'
import completedImage from 'src/images/success.svg'
import incomplteImage from 'src/images/incomplete.svg'

const IndexPage = ({ data }) => {
  let [ completedItems, setcompletedItems ] = useState({});
  useEffect(() => {
    setcompletedItems(JSON.parse(localStorage.getItem('completedItems')) || {});
  }, [])

  let checkListItems = data.allCheckListItem.nodes;

  const togglecompletedItems = (id) => {
    let toggled;
    if (completedItems[id]) {
      toggled = { ...completedItems };
      delete toggled[id];
    } else {
      toggled = { ...completedItems, [id]: true };
    }

    setcompletedItems(toggled);
    localStorage.setItem('completedItems', JSON.stringify(toggled))
  }

  return (<Layout>
    <SEO title="Home" />
    
    <div className={styles.checklist}>
      {checkListItems.map(item => (
        <div className={styles.checklistItem} key={item.id} onClick={() => togglecompletedItems(item.id)}>
          <Card
            title={item.title}
            text={item.description}
            ribbonColor={completedItems[item.id] ? 'green' : 'red'}
            cardIcon={completedItems[item.id] ? completedImage : incomplteImage}
            cardState={completedItems[item.id] ? 'Complete!' : 'In progress!'}
          ></Card>
        </div>
      ))}
    </div>
  </Layout>)
}

export const query = graphql`
query {
  allCheckListItem {
    nodes {
      description
      title
      id
    }
  }
}
`

export default IndexPage
