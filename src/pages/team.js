import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import Hero from "../components/hero/index"
import {Helmet} from "react-helmet";
import Img from "gatsby-image"


import "../layouts/pages/team.css"

class ContactPage extends Component {
  toggleTitle(event){
    let elementId = event.target.getAttribute("id")
    let teamArray = [...document.getElementsByClassName(elementId)];

    if(event.target.classList.contains("active")){
        event.target.classList.remove("active")
        
        teamArray.map(element => 
            element.classList.remove("active")
        )
    }else{
        event.target.classList.add("active")
        
        teamArray.map(element => 
            element.classList.add("active")
        )
    }
  }
  toggleTeamMember(event){
    let elementId = event.target.classList[1];
    let teamArray = [...document.getElementsByClassName(elementId)];
    
    console.log(elementId);

    if(event.target.classList.contains("active")){
        document.getElementById(elementId).classList.remove("active")

        teamArray.map(element => 
            element.classList.remove("active")
        )
    }else{
        document.getElementById(elementId).classList.add("active")

        teamArray.map(element => 
            element.classList.add("active")
        )
    }
  }
  componentDidMount(){
    let teamArray = [...document.getElementsByClassName("creative")];

    teamArray.map(element => 
        element.classList.add("active")
    )
  }

  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node; 
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf;
    console.log(pageAcf);
    return ( 
      <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={ pageData.yoast_meta.yoast_wpseo_metadesc }/>
            <title>{ pageData.yoast_meta.yoast_wpseo_title }</title>
            <link rel="canonical" href={ pageData.yoast_meta.yoast_wpseo_canonical} />
          </Helmet>
          <Hero 
            theme={pageAcf.section_color}
            image={pageAcf.fallback_image} 
            video={pageAcf.video_background}
            title={pageAcf.top_title}
            firstSubtitle={pageAcf.first_subtitle}
            secondSubtitle={pageAcf.second_subtitle}
          >
          </Hero>
          <section className="team__section">
            <div className="container container__custom">
                <div className="row">
                    <div className="no__padding col-xs-12 col-sm-12 col-md-3 col-lg-3 team__column__one">
                        {
                            pageAcf.team_categories.map((categorie,index) =>
                                <h2 className={`categorie__name xmd__font bold__font ${ index === 0 ? "active" : "" } `} id={categorie.title === "Creative Team" ? "creative" : categorie.title.toLowerCase()} key={index} onClick={this.toggleTitle} >
                                    {categorie.title}
                                    {
                                        index === 0
                                        ? " / "
                                        : ""
                                    }
                                </h2>
                            )
                        }
                        <div
                            className="sm__font reg__font team__copy"
                            dangerouslySetInnerHTML={{ __html: pageAcf.team_copy }}
                        />
                        <div className="team__members">
                            {
                                pageAcf.team_members.map((member, index) => 
                                    index < 2
                                    ?
                                    <div className={`team__member  ${member.category}`} onClick={this.toggleTeamMember}>
                                        <div className={`team__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__member__info">
                                            <p className="xsm__font reg__font team__member__info__name">
                                                {member.name}
                                            </p>
                                            <p className="xsm__font reg__font team__member__info__position">
                                                {member.position}
                                            </p>
                                        </div>
                                    </div>
                                    : ""
                                )
                            }
                        </div>
                    </div>
                    <div className="no__padding col-xs-12 col-sm-12 col-md-3 col-lg-3 team__column__two">
                        <div className="team__members">
                        {
                                pageAcf.team_members.map((member, index) => 
                                    index > 1 & index < 7
                                    ?
                                    <div className={`team__member ${member.category}`} onClick={this.toggleTeamMember}>
                                        <div className={`team__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__member__info">
                                            <p className="xsm__font reg__font team__member__info__name">
                                                {member.name}
                                            </p>
                                            <p className="xsm__font reg__font team__member__info__position">
                                                {member.position}
                                            </p>
                                        </div>
                                    </div>
                                    : ""
                                )
                            }
                            </div>
                    </div>
                    <div className="no__padding col-xs-12 col-sm-12 col-md-3 col-lg-3 team__column__three">
                        <div className="team__members">
                        {
                                pageAcf.team_members.map((member, index) => 
                                    index > 6 & index < 12
                                    ?
                                    <div className={`team__member ${member.category}`} onClick={this.toggleTeamMember}>
                                        <div className={`team__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__member__info">
                                            <p className="xsm__font reg__font team__member__info__name">
                                                {member.name}
                                            </p>
                                            <p className="xsm__font reg__font team__member__info__position">
                                                {member.position}
                                            </p>
                                        </div>
                                    </div>
                                    : ""
                                )
                            }
                        </div>
                    </div>
                    <div className="no__padding col-xs-12 col-sm-12 col-md-3 col-lg-3 team__column__four">
                        <div className="team__members">
                            {   
                                pageAcf.team_members.map((member, index) => 
                                    index > 11 & index < 17
                                    ?
                                    <div className={`team__member ${member.category}`} onClick={this.toggleTeamMember}>
                                        <div className={`team__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__member__info">
                                            <p className="xsm__font reg__font team__member__info__name">
                                                {member.name}
                                            </p>
                                            <p className="xsm__font reg__font team__member__info__position">
                                                {member.position}
                                            </p>
                                        </div>
                                    </div>
                                    : ""
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </Layout>
    )
  }
}
export default ContactPage

export const pageQuery = graphql`
query TeamQuery {
    allWordpressPage(filter: {slug: {eq: "team"}}) {
      edges {
        node {
          id
          title
          content
          date(formatString: "MMMM DD, YYYY")
          yoast_meta {
            yoast_wpseo_metadesc
            yoast_wpseo_title
            yoast_wpseo_canonical
          }
          acf{
            top_title
            first_subtitle
            second_subtitle
            video_background {
              id
            }
            fallback_image {
              id
            }
            section_color
            team_categories{
                title
            }
            team_copy
            team_members{
                name
                position
                category
                photo{
                    localFile {
                        childImageSharp {
                          fluid(maxWidth: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                        url
                    }
                }
            }
          }
        }
      }
    }
  }  
`
