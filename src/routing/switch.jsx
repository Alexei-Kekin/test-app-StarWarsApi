


export const Switch = () => (
    <ReactRouterSwitch>
        <Route path={ROUTES_MAP.home.path} component={Home} />
        <Route path={ROUTES_MAP.price.path} component={Price} />
        <Route path={ROUTES_MAP.contacts.path} component={Contacts} />
        <Route path={ROUTES_MAP.reports.path} component={Reports}/>
        <Route path={ROUTES_MAP.directory.path} component={Directory} />
        <Redirect to={DEFAULT_ROUTE.path} />
    </ReactRouterSwitch>
);