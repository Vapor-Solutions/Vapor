import{_ as i}from"./AppLayout-bd3cba49.js";import o from"./DeleteTeamForm-04287373.js";import{S as r}from"./SectionBorder-bdced331.js";import l from"./TeamMemberManager-ef1c1301.js";import n from"./UpdateTeamNameForm-e4757d76.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app-f837c002.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-949dc47e.js";import"./SectionTitle-817d4ea3.js";import"./ConfirmationModal-49fa77a1.js";import"./DangerButton-696716d1.js";import"./SecondaryButton-929789b0.js";import"./ActionMessage-4d1a88f8.js";import"./DialogModal-ab2223f7.js";import"./FormSection-4aa75cec.js";import"./TextInput-3a6a08e1.js";import"./InputLabel-903eea11.js";import"./PrimaryButton-77582d0b.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};
