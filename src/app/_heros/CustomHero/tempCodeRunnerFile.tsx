<div className={classes.content}>
            <RichText content={richText} />
            {Array.isArray(links) && links.length > 0 && (
            <ul className={classes.links}>
                {links.map(({ link }, i) => {
                return (
                    <li key={i}>
                    <CMSLink {...link} />
                    </li>
                )
                })}
            </ul>
            )}
        </div>
        <div className={classes.media}>
            {typeof media === 'object' && (
            <Fragment>
                <Media
                resource={media}
                // fill
                imgClassName={classes.image}
                priority
                />
                {media?.caption && <RichText content={media.caption} className={classes.caption} />}
            </Fragment>
            )}
        </div>