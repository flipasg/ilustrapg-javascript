var eventsConfiguration = {
	sections: [{
		selector: "#editorial a",
		type: "click",
		childrenTemplate: "pageThumbnail",
		template: "sectionPage"
	},{
		selector: "#dibujosypinturas a",
		type: "click",
		childrenTemplate: "pageThumbnail",
		template: "sectionPage"
	},{
		selector: "#posters a",
		type: "click",
		childrenTemplate: "pageThumbnail",
		template: "sectionPage"
	},{
		selector: "#retratos a",
		type: "click",
		childrenTemplate: "pageThumbnail",
		template: "sectionPage"
	}],
	groups: [{
		selector: "#adulto a",
		type: "click",
		childrenTemplate: "pageThumbnail",
		template: "sectionPage"
	},{
		selector: "#infantil a",
		type: "click",
		childrenTemplate: "pageThumbnail",
		template: "sectionPage"
	}],
	articles: [{
		selector: "#lavozeslava a",
		type: "click",
		template: "pageTemplate"
	},{
		selector: "#circe a",
		type: "click",
		template: "pageTemplate"
	},{
		selector: "#narciso a",
		type: "click",
		template: "pageTemplate"
	},{
		selector: "#medeacomic a",
		type: "click",
		template: "pageTemplate"
	}
	// ,{
	// 	selector: "#elninoylacaracola a",
	// 	type: "click",
	// 	template: "pageTemplate"
	// }
	,{
		selector: "#labellaylabestia a",
		type: "click",
		template: "pageTemplate"
	},{
		selector: "#cuentosclasicos a",
		type: "click",
		template: "pageTemplate"
	},{
		selector: "#libretas a",
		type: "click",
		template: "pageTemplate"
	},{
		selector: "#figuras a",
		type: "click",
		template: "pageTemplate"
	},{
		selector: "#eulienkantua a",
		type: "click",
		template: "pageTemplate"
	},
	// {
	// 	selector: "#shakespeare a",
	// 	type: "click",
	// 	template: "pageTemplate"
	// }
	// ,
	{
		selector: "#culpables a",
		type: "click",
		template: "pageTemplate"
	},{
		selector: "#personales a",
		type: "click",
		template: "pageTemplate"
	}],
	contact:{
		id: "contact",
		selector: "#contacto a",
		pageConfiguration:{
            id: "contactContainer",
            className: "container-fluid contactContainer",
            aboutMeContainerId: "aboutMeContainer",
            aboutMeContainerClass: "col-xs-6 col-sm-7 col-md-7 col-lg-6 aboutMeContainer",
            aboutMeTitleId: "aboutMeTitle",
            aboutMeTitleClass: "pageSubtitle aboutMeTitle",
            aboutMeTitleText: "@aboutMe",
            aboutMeParagraphId: "aboutMeParagraph",
            aboutMeParagraphClass: "aboutMeParagraph",
            aboutMeParagraphText: "@aboutMeContent",
            contactMainImageContainerId: "contactMainImageContainer",
            contactMainImageContainerClass: "col-xs-6 col-sm-5 col-md-5 col-lg-3 contactMainImageContainer",
            contactMainImageId: "contactMainImage",
            contactMainImageClass: "contactMainImage img-responsive",
            contactMainImageSrc: "#contactMainImage",
            contactMainImageAlt: "@contactMainImage",
            contactSocialContainerId: "contactSocialContainer",
            contactSocialContainerClass: "col-xs-12 col-sm-12 col-md-12 col-lg-3 contactSocialContainer",
            contactSocialTitleId: "socialTitle",
            contactSocialTitleClass: "hidden-xs hidden-sm hidden-md pageSubtitle socialTitle",
            contactSocialTitleText: "@contactSocialTitle",
            contactPhoneContainerId: "contactPhoneContainer",
            contactPhoneContainerClass: "col-xs-12 col-sm-6 col-md-6 col-lg-12 contactPhoneContainer contactRow",
            contactPhoneImageId: "contactPhoneImage",
            contactPhoneImageClass: "img-responsive contactPhoneImage",
            contactPhoneImageSrc: "#contactPhoneImage",
            contactPhoneImageAlt: "@contactPhoneImage",
            contactPhoneParagraphId: "contactPhoneParagraph",
            contactPhoneParagraphClass: "contactPhoneParagraph",
            contactPhoneParagraphText: "@contactPhoneParagraphText",
            contactEmailContainerId: "contactEmailContainer",
            contactEmailContainerClass: "col-xs-12 col-sm-6 col-md-6 col-lg-12 contactEmailContainer contactRow",
            contactEmailImageId: "contactEmailImage",
            contactEmailImageClass: "img-responsive contactEmailImage",
            contactEmailImageSrc: "#contactEmailImage",
            contactEmailImageAlt: "@contactEmailImage",
            contactEmailParagraphId: "contactEmailParagraph",
            contactEmailParagraphClass: "contactEmailParagraph",
            contactEmailParagraphText: "@contactEmailParagraph",
            contactTwitterContainerId: "contactTwitterContainer",
            contactTwitterContainerClass: "col-xs-12 col-sm-6 col-md-6 col-lg-10 contactTwitterContainer contactRow",
            contactTwitterArrowContainerId: "contactTwitterArrowContainer",
            contactTwitterArrowContainerClass: "contactTwitterArrowContainer contactRow",
            contactTwitterArrowImageId: "contactTwitterArrowImage",
            contactTwitterArrowImageClass: "img-responsive contactTwitterArrowImage",
            contactTwitterArrowImageSrc: "#contactTwitterArrowImage",
            contactTwitterArrowImageAlt: "@contactTwitterArrowImage",
            contactTwitterArrowImageLink: "_twitter",
            contactTwitterImageId: "contactTwitterImage",
            contactTwitterImageClass: "img-responsive contactTwitterImage",
            contactTwitterImageSrc: "#contactTwitterImage",
            contactTwitterImageAlt: "@contactTwitterImage",
            contactTwitterImageLink: "_twitter",
            contactOthersContainerId: "contactOthersContainer",
            contactOthersContainerClass: "col-xs-12 col-sm-6 col-md-6 col-lg-12 contactOthersContainer contactRow",
            contactFacebookImageId: "contactFacebookImage",
            contactFacebookImageClass: "img-responsive contactFacebookImage",
            contactFacebookImageSrc: "#contactFacebookImage",
            contactFacebookImageAlt: "@contactFacebookImage",
            contactFacebookImageLink: "_facebook",
            contactInstagramImageId: "contactInstagramImage",
            contactInstagramImageClass: "img-responsive contactInstagramImage",
            contactInstagramImageSrc: "#contactInstagramImage",
            contactInstagramImageAlt: "@contactInstagramImage",
            contactInstagramImageLink: "_instagram",
            template: "contactTemplate"
        }
	}
};