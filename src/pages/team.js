import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import Hero from "../components/hero/index"
import {Helmet} from "react-helmet";
import Img from "gatsby-image"


import "../layouts/pages/team.css"

class Team extends Component {
  componentDidMount(){
    let teamArray = [...document.getElementsByClassName("creative")];

    teamArray.map(element => 
        element.classList.add("active")
    )
  }

  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node; 
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf;

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
          <div className="main__section__wrapper">
             <section className="team__new">
              <div className="container container__custom">
                    <div className="row team__row__one">
                      {/* FIRST ROW OF TEAM */}
                      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 team__member__0 no__padding">
                        {
                            pageAcf.team_members.map((member, index) => 
                                index === 0
                                ?
                                <div className={`team__new__member ${member.category}`} key={index} onClick={this.toggleTeamMember}>
                                    <div className={`team__new__member__background`}>
                                        {
                                            member.photo
                                            ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                            :""
                                        }
                                    </div>
                                    <div className="team__new__member__info">
                                        <p className="xxl__font team__new__member__info__name">
                                            {member.name}
                                        </p>
                                        <div className="team__information">
                                            <p className="sm__font bold__font reg__font team__new__member__info__position">
                                                {member.position}
                                            </p>
                                            <p className="sm__font reg__font team__new__member__info__position">
                                                {member.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                : ""
                            )
                        }
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 dark__space no__padding"></div>
                      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 team__member__1 no__padding">
                        {
                            pageAcf.team_members.map((member, index) => 
                                index === 1
                                ?
                                <div className={`team__new__member ${member.category}`} key={index} onClick={this.toggleTeamMember}>
                                    <div className={`team__new__member__background`}>
                                        {
                                            member.photo
                                            ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                            :""
                                        }
                                    </div>
                                    <div className="team__new__member__info">
                                        <p className="xxl__font team__new__member__info__name">
                                            {member.name}
                                        </p>
                                        <div className="team__information">
                                            <p className="sm__font bold__font reg__font team__new__member__info__position">
                                                {member.position}
                                            </p>
                                            <p className="sm__font reg__font team__new__member__info__position">
                                                {member.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                : ""
                            )
                        }
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 dark__space no__padding"></div>




                    </div>
                    <div className="row team__row__two">
                      {/* SECOND ROW OF TEAM */}
                      {
                            pageAcf.team_members.map((member, index) => 
                                index >= 2 & index  < 6
                                ?
                                <div className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 team__member__block team__member__${index} no__padding`} key={index}>
                                    <div className={`team__new__member ${member.category}`}  onClick={this.toggleTeamMember}>
                                        <div className={`team__new__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__new__member__info">
                                            <p className="xxl__font team__new__member__info__name">
                                                {member.name}
                                            </p>
                                            <div className="team__information">
                                            <p className="sm__font bold__font reg__font team__new__member__info__position">
                                                {member.position}
                                            </p>
                                            <p className="sm__font reg__font team__new__member__info__position">
                                                {member.email}
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ""
                            )
                        }


                    </div>
                    <div className="row team__row__three">
                        {/* THIRD ROW OF TEAM */}
                        
                        {
                            pageAcf.team_members.map((member, index) => 
                                index >= 6 & index  < 9
                                ?
                                <div className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 team__member__block team__member__${index} no__padding`} key={index}>
                                    <div className={`team__new__member ${member.category}`}  onClick={this.toggleTeamMember}>
                                        <div className={`team__new__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__new__member__info">
                                            <p className="xxl__font team__new__member__info__name">
                                                {member.name}
                                            </p>
                                            <div className="team__information">
                                            <p className="sm__font bold__font reg__font team__new__member__info__position">
                                                {member.position}
                                            </p>
                                            <p className="sm__font reg__font team__new__member__info__position">
                                                {member.email}
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ""
                            )
                        }
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 dark__space no__padding"></div>
                    </div>
                    <div className="row team__row__four">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 dark__space no__padding"></div>
                        {
                            pageAcf.team_members.map((member, index) => 
                                index >= 9 & index  < 12
                                ?
                                <div className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 team__member__block team__member__${index} no__padding`} key={index}>
                                    <div className={`team__new__member ${member.category}`}  onClick={this.toggleTeamMember}>
                                        <div className={`team__new__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__new__member__info">
                                            <p className="xxl__font team__new__member__info__name">
                                                {member.name}
                                            </p>
                                            <div className="team__information">
                                            <p className="sm__font bold__font reg__font team__new__member__info__position">
                                                {member.position}
                                            </p>
                                            <p className="sm__font reg__font team__new__member__info__position">
                                                {member.email}
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ""
                            )
                        }
                    </div>
                    <div className="row team__row__five">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 dark__space no__padding"></div>
                        {
                            pageAcf.team_members.map((member, index) => 
                                index >= 12 & index  < 14
                                ?
                                <div className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 team__member__block team__member__${index} no__padding`} key={index}>
                                    <div className={`team__new__member ${member.category}`}  onClick={this.toggleTeamMember}>
                                        <div className={`team__new__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__new__member__info">
                                            <p className="xxl__font team__new__member__info__name">
                                                {member.name}
                                            </p>
                                            <div className="team__information">
                                            <p className="sm__font bold__font reg__font team__new__member__info__position">
                                                {member.position}
                                            </p>
                                            <p className="sm__font reg__font team__new__member__info__position">
                                                {member.email}
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ""
                            )
                        }
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 dark__space no__padding"></div>
                    </div>
                    <div className="row team__row__six">
                    {
                            pageAcf.team_members.map((member, index) => 
                                index >= 14 & index  < 15
                                ?
                                <div className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 team__member__block team__member__${index} no__padding`} key={index}>
                                    <div className={`team__new__member ${member.category}`}  onClick={this.toggleTeamMember}>
                                        <div className={`team__new__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__new__member__info">
                                            <p className="xxl__font team__new__member__info__name">
                                                {member.name}
                                            </p>
                                            <div className="team__information">
                                            <p className="sm__font bold__font reg__font team__new__member__info__position">
                                                {member.position}
                                            </p>
                                            <p className="sm__font reg__font team__new__member__info__position">
                                                {member.email}
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ""
                            )
                        }
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 dark__space no__padding"></div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 dark__space no__padding"></div>
                        {
                            pageAcf.team_members.map((member, index) => 
                                index >= 15 & index  < 16
                                
                                ?
                                <div className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 team__member__block team__member__${index} no__padding`} key={index}>
                                    <div className={`team__new__member ${member.category}`}  onClick={this.toggleTeamMember}>
                                        <div className={`team__new__member__background`}>
                                            {
                                                member.photo
                                                ?<Img fluid={member.photo.localFile.childImageSharp.fluid} alt={`${member.name} photo`} tabIndex={-1}/>
                                                :""
                                            }
                                        </div>
                                        <div className="team__new__member__info">
                                            <p className="xxl__font team__new__member__info__name">
                                                {member.name}
                                            </p>
                                            <div className="team__information">
                                            <p className="sm__font bold__font reg__font team__new__member__info__position">
                                                {member.position}
                                            </p>
                                            <p className="sm__font reg__font team__new__member__info__position">
                                                {member.email}
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ""
                            )
                        }
                    </div>
                </div>
          </section>
          </div>
      </Layout>
    )
  }
}
export default Team

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
                email
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
