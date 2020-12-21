import React from "react";
import { Show,SimpleShowLayout,TextField,RichTextField,DateField } from "react-admin";


const PostShow = props =>(
<Show {...props}>
<SimpleShowLayout>

<TextField source="title" />
            <TextField source="teaser" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
</SimpleShowLayout>


</Show>

);
export default PostShow;