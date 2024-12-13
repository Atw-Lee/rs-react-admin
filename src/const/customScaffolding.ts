export default {
  routeTemplate: [
    '%%tsrImports%%',
    "import { FormattedMessage } from 'react-intl';",
    '\n\n',
    '%%tsrExportStart%%{\n component: RouteComponent,\n staticData: {\nname: <FormattedMessage id="%%tsrPath%%"/>,\n icon: ""}, }%%tsrExportEnd%%\n\n',
    'function RouteComponent() { return <div>Hello "%%tsrPath%%"!</div> };\n',
  ].join(''),
  apiTemplate: [
    'import { json } from "@tanstack/start";\n',
    '%%tsrImports%%',
    '\n\n',
    '%%tsrExportStart%%{ GET: ({ request, params }) => { return json({ message:\'Hello "%%tsrPath%%"!\' }) }}%%tsrExportEnd%%\n',
  ].join(''),
};
