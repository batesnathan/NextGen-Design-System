import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as m}from"./Button-Dvan20Mw.js";import{C as p}from"./Card-Mol24qYd.js";function i({className:a="",...t}){return e.jsx("input",{className:`ng-reset ng-input ${a}`.trim(),...t})}i.__docgenInfo={description:"",methods:[],displayName:"Input",props:{className:{defaultValue:{value:'""',computed:!1},required:!1}}};function n({gap:a="var(--ng-space-3)",direction:t="column",align:r="stretch",justify:l="flex-start",style:o,children:d,...u}){return e.jsx("div",{style:{display:"flex",flexDirection:t,alignItems:r,justifyContent:l,gap:a,...o},...u,children:d})}n.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{gap:{defaultValue:{value:'"var(--ng-space-3)"',computed:!1},required:!1},direction:{defaultValue:{value:'"column"',computed:!1},required:!1},align:{defaultValue:{value:'"stretch"',computed:!1},required:!1},justify:{defaultValue:{value:'"flex-start"',computed:!1},required:!1}}};function c({as:a="p",variant:t="body-2",className:r="",children:l,...o}){const d=a;return e.jsx(d,{className:`ng-reset ng-text--${t} ${r}`.trim(),...o,children:l})}c.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{defaultValue:{value:'"p"',computed:!1},required:!1},variant:{defaultValue:{value:'"body-2"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const v={title:"NextGen/Patterns/Form Card",component:p,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx("div",{style:{width:380,maxWidth:"90vw"},children:e.jsx(p,{children:e.jsxs(n,{gap:"var(--ng-space-4)",children:[e.jsxs(n,{gap:"var(--ng-space-2)",children:[e.jsx(c,{as:"h2",variant:"title-3",children:"Welcome back"}),e.jsx(c,{variant:"body-2",children:"Use NextGen semantic tokens to keep UI consistent."})]}),e.jsxs(n,{gap:"var(--ng-space-2)",children:[e.jsx(i,{placeholder:"Email","aria-label":"Email"}),e.jsx(i,{placeholder:"Password",type:"password","aria-label":"Password"})]}),e.jsx(m,{children:"Sign in"})]})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 380,
    maxWidth: "90vw"
  }}>
      <Card>
        <Stack gap="var(--ng-space-4)">
          <Stack gap="var(--ng-space-2)">
            <Text as="h2" variant="title-3">
              Welcome back
            </Text>
            <Text variant="body-2">Use NextGen semantic tokens to keep UI consistent.</Text>
          </Stack>

          <Stack gap="var(--ng-space-2)">
            <Input placeholder="Email" aria-label="Email" />
            <Input placeholder="Password" type="password" aria-label="Password" />
          </Stack>

          <Button>Sign in</Button>
        </Stack>
      </Card>
    </div>
}`,...s.parameters?.docs?.source}}};const h=["SignIn"];export{s as SignIn,h as __namedExportsOrder,v as default};
