
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import SEOHead from "@/components/shared/SEOHead";

// Mock data for a blog post
const blogPostData = {
  title: "How Health Insurance Works in the U.S.: A Complete Guide",
  excerpt: "Understand the basics of health insurance in America, from premiums and deductibles to networks and coverage options.",
  image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=870",
  category: "Health",
  date: "Apr 15, 2025",
  readTime: "8 min read",
  author: {
    name: "Sarah Johnson",
    title: "Insurance Expert",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  content: `
    <h2>Introduction to Health Insurance in the United States</h2>
    <p>Health insurance in the United States is a complex system that often leaves many Americans confused about their coverage options, costs, and benefits. This comprehensive guide aims to demystify the U.S. health insurance landscape and help you make informed decisions about your healthcare coverage.</p>
    
    <p>Unlike many other developed nations that provide universal healthcare to all citizens, the U.S. has a mixed system where insurance can be obtained through:</p>
    
    <ul>
      <li>Employer-sponsored plans</li>
      <li>Government programs (Medicare, Medicaid)</li>
      <li>Individual marketplace plans</li>
      <li>Private insurance companies</li>
    </ul>
    
    <h2>Key Health Insurance Concepts</h2>
    
    <h3>Premiums</h3>
    <p>A premium is the amount you pay to your insurance company for your health insurance policy, typically on a monthly basis. Think of it as your subscription fee for health coverage. Premiums can vary widely depending on:</p>
    
    <ul>
      <li>The level of coverage you choose</li>
      <li>Your age</li>
      <li>Your location</li>
      <li>Whether you smoke</li>
      <li>Whether the plan covers just you or your family as well</li>
    </ul>
    
    <p>Generally, plans with lower premiums have higher out-of-pocket costs when you actually receive care, while plans with higher premiums typically offer more comprehensive coverage with lower out-of-pocket costs.</p>
    
    <h3>Deductibles</h3>
    <p>A deductible is the amount you must pay out-of-pocket for covered healthcare services before your insurance begins to pay. For example, if your plan has a $2,000 deductible, you'll pay the first $2,000 of covered services yourself.</p>
    
    <p>After you meet your deductible, you typically split the cost with your insurance company according to a coinsurance percentage until you reach your out-of-pocket maximum.</p>
    
    <h3>Copayments and Coinsurance</h3>
    <p>Once you've met your deductible, you'll typically be responsible for one of these cost-sharing mechanisms:</p>
    
    <ul>
      <li>Copayment (or copay): A fixed amount you pay for a covered healthcare service (e.g., $25 for a doctor visit, $15 for a prescription)</li>
      <li>Coinsurance: A percentage of costs you pay for covered services (e.g., 20% of the cost of a hospital stay)</li>
    </ul>
    
    <h3>Out-of-Pocket Maximum</h3>
    <p>The out-of-pocket maximum is the most you have to pay for covered services in a plan year. After you spend this amount on deductibles, copayments, and coinsurance, your health plan pays 100% of the costs of covered benefits for the remainder of the plan year.</p>
    
    <h2>Types of Health Insurance Plans</h2>
    
    <h3>Health Maintenance Organization (HMO)</h3>
    <p>HMO plans typically require you to choose a primary care physician (PCP) who coordinates your care and provides referrals to specialists. HMOs generally only cover care from providers within their network, except in emergencies.</p>
    
    <p>Advantages of HMOs include:</p>
    <ul>
      <li>Lower out-of-pocket costs</li>
      <li>Lower premiums</li>
      <li>Less paperwork</li>
      <li>A focus on preventive care</li>
    </ul>
    
    <p>The main disadvantage is reduced flexibility in choosing healthcare providers.</p>
    
    <h3>Preferred Provider Organization (PPO)</h3>
    <p>PPO plans offer more flexibility in choosing healthcare providers. You can see specialists without referrals, and you can get care from out-of-network providers (although at a higher cost).</p>
    
    <p>Advantages of PPOs include:</p>
    <ul>
      <li>More freedom to choose providers</li>
      <li>No need for referrals to see specialists</li>
      <li>Some coverage for out-of-network care</li>
    </ul>
    
    <p>The main disadvantages are higher premiums and out-of-pocket costs compared to HMO plans.</p>
    
    <h3>Exclusive Provider Organization (EPO)</h3>
    <p>EPO plans are a hybrid between HMOs and PPOs. They typically don't cover out-of-network care except in emergencies, but they usually don't require referrals to see specialists.</p>
    
    <h3>Point of Service (POS)</h3>
    <p>POS plans are another hybrid option. Like HMOs, they require a PCP and referrals for specialists. Like PPOs, they offer some coverage for out-of-network care, though at a higher cost.</p>
    
    <h3>High Deductible Health Plan (HDHP) with Health Savings Account (HSA)</h3>
    <p>HDHPs feature higher deductibles but lower premiums. When paired with an HSA, they allow you to set aside pre-tax money to pay for qualified medical expenses. This option can be cost-effective for healthy individuals who don't expect to need much healthcare during the year.</p>
    
    <h2>How to Choose the Right Health Insurance Plan</h2>
    
    <p>Selecting the most appropriate health insurance plan requires careful consideration of several factors:</p>
    
    <h3>1. Analyze Your Healthcare Needs</h3>
    <ul>
      <li>How often do you visit the doctor?</li>
      <li>Do you have any chronic conditions requiring regular care?</li>
      <li>Do you take prescription medications regularly?</li>
      <li>Are you planning any major medical procedures in the coming year?</li>
      <li>How important is it to keep your current doctors?</li>
    </ul>
    
    <h3>2. Compare Costs Holistically</h3>
    <p>Look beyond just the monthly premium. Consider:</p>
    <ul>
      <li>Deductible amount</li>
      <li>Copayment and coinsurance rates</li>
      <li>Out-of-pocket maximum</li>
      <li>Typical healthcare services you use and their costs under each plan</li>
    </ul>
    
    <h3>3. Check Provider Networks</h3>
    <p>Verify that your preferred doctors, specialists, and hospitals are in-network for any plan you're considering.</p>
    
    <h3>4. Review Drug Formularies</h3>
    <p>If you take prescription medications, check that they're covered and note what tier they fall under, as this affects your costs.</p>
    
    <h3>5. Consider Additional Benefits</h3>
    <p>Some plans offer extra perks like:</p>
    <ul>
      <li>Telehealth services</li>
      <li>Wellness programs</li>
      <li>Mental health services</li>
      <li>Physical therapy</li>
      <li>Alternative medicine coverage</li>
    </ul>
    
    <h2>Government Health Insurance Programs</h2>
    
    <h3>Medicare</h3>
    <p>Medicare is a federal health insurance program primarily for people aged 65 and older, as well as certain younger people with disabilities. It consists of:</p>
    <ul>
      <li>Part A (Hospital Insurance)</li>
      <li>Part B (Medical Insurance)</li>
      <li>Part C (Medicare Advantage Plans)</li>
      <li>Part D (Prescription Drug Coverage)</li>
    </ul>
    
    <h3>Medicaid</h3>
    <p>Medicaid is a joint federal and state program that provides health coverage to eligible low-income adults, children, pregnant women, elderly adults, and people with disabilities. Eligibility and benefits vary by state.</p>
    
    <h3>Children's Health Insurance Program (CHIP)</h3>
    <p>CHIP provides low-cost health coverage to children in families that earn too much to qualify for Medicaid but too little to afford private insurance.</p>
    
    <h2>The Affordable Care Act (ACA) and Health Insurance Marketplaces</h2>
    
    <p>The ACA, also known as Obamacare, made significant changes to the U.S. healthcare system, including:</p>
    
    <ul>
      <li>Creating health insurance marketplaces where individuals and small businesses can purchase coverage</li>
      <li>Providing subsidies to make insurance more affordable for low and middle-income Americans</li>
      <li>Prohibiting insurers from denying coverage or charging more based on pre-existing conditions</li>
      <li>Requiring plans to cover essential health benefits</li>
      <li>Allowing young adults to stay on their parents' insurance until age 26</li>
      <li>Eliminating annual and lifetime coverage limits</li>
    </ul>
    
    <p>You can purchase marketplace plans during the annual Open Enrollment Period or during a Special Enrollment Period if you experience a qualifying life event such as marriage, birth of a child, or loss of other health coverage.</p>
    
    <h2>Employer-Sponsored Health Insurance</h2>
    
    <p>Many Americans get their health insurance through their employers. These group plans often offer several advantages:</p>
    
    <ul>
      <li>Lower premiums (since employers typically pay a portion of the cost)</li>
      <li>Pre-tax premium payments</li>
      <li>Simplified enrollment process</li>
    </ul>
    
    <p>However, employer-sponsored plans also limit your choices to the options your company offers.</p>
    
    <h2>Conclusion</h2>
    
    <p>Navigating the U.S. health insurance system can be challenging, but understanding the basic concepts and options available to you is essential for making informed decisions about your healthcare coverage. Remember to reassess your health insurance needs annually during open enrollment periods, as both your personal healthcare needs and insurance options can change over time.</p>
    
    <p>By carefully evaluating your options based on your specific situation, you can find a health insurance plan that provides the coverage you need at a price you can afford.</p>
  `,
  relatedPosts: [
    {
      id: 8,
      title: "Medicare vs. Medicaid: Understanding the Differences",
      excerpt: "A clear breakdown of these two important government health insurance programs and who qualifies for each.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=870",
      category: "Health",
      slug: "medicare-vs-medicaid-differences"
    },
    {
      id: 9,
      title: "Best Health Insurance for Families in Texas (2025)",
      excerpt: "We compare the top health insurance providers in Texas based on coverage, networks, and affordability for families.",
      image: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=870",
      category: "Health",
      slug: "best-health-insurance-families-texas-2025"
    },
    {
      id: 5,
      title: "Homeowners Insurance: What It Covers and What It Doesn't",
      excerpt: "A detailed look at standard coverage, exclusions, and additional policies you might need to protect your home.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=870",
      category: "Property",
      slug: "homeowners-insurance-coverage"
    }
  ]
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real application, you would fetch the blog post data based on the slug
  // For now, we'll use mock data

  return (
    <>
      <SEOHead 
        title={blogPostData.title}
        description={blogPostData.excerpt}
        keywords={`health insurance, US health insurance, ${blogPostData.category.toLowerCase()} insurance, insurance guide`}
        ogImage={blogPostData.image}
      />
      <Navbar />
      <main>
        <article className="pt-28 pb-16">
          {/* Hero Section */}
          <div className="bg-gradient-to-b from-gray-50 to-white">
            <div className="container-custom py-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center mb-6">
                  <Link to="/blog" className="text-primary hover:underline flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Blog
                  </Link>
                </div>
                
                <span className="bg-primary text-white text-sm px-3 py-1 rounded mb-4 inline-block">
                  {blogPostData.category}
                </span>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {blogPostData.title}
                </h1>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <span>{blogPostData.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPostData.readTime}</span>
                </div>
                
                <div className="flex items-center mb-8">
                  <img 
                    src={blogPostData.author.image} 
                    alt={blogPostData.author.name}
                    className="w-12 h-12 rounded-full mr-4" 
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold">{blogPostData.author.name}</h3>
                    <p className="text-sm text-gray-600">{blogPostData.author.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="container-custom mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={blogPostData.image} 
                  alt={blogPostData.title}
                  className="w-full h-auto rounded-lg shadow-md object-cover" 
                  loading="eager"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPostData.content }}></div>
              
              {/* Author Bio & Share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center">
                    <img 
                      src={blogPostData.author.image} 
                      alt={blogPostData.author.name}
                      className="w-16 h-16 rounded-full mr-4" 
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{blogPostData.author.name}</h3>
                      <p className="text-gray-600">{blogPostData.author.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Share:</span>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPostData.relatedPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold py-1 px-2 rounded">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <span className="text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
