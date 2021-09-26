import React from "react"
 
const tooltipText = 'Clique em alguma das opções de leitura acima!'

const TooltipGuided = () => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', marginLeft: '12px'}}>
                <div className="main">
                <div className="wrapper">
                        <div className="tooltip-right tooltip-mobile" data-tooltip={tooltipText}>
                            <i className="fas fa-question-circle" focusable="false" aria-hidden="true">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"></path>
                                    <circle fill="none" cx="9.98" cy="9.446" r="1.629"></circle>
                                </svg>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
/**
 * 
 */

export default TooltipGuided
