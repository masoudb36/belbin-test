import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		direction: 'rtl',
		
		padding: theme.spacing(4, 10),
		fontSize: theme.spacing(2.4),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		marginBottom: theme.spacing(1),
	},
	content: {
		margin: theme.spacing(1, 0),
	},
	headerButton: {
		textAlign: 'center',
		marginTop: theme.spacing(1),
		textDecoration: 'none',
	},
}));

const Instructions = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Typography className={classes.title} variant='h4'>
				نحوه انجام آزمون بلبین
			</Typography>
			<Typography className={classes.content} variant='p'>
				در نسخه جدید تست بلبین 7 سوال 9 گزینه ای در نظر گرفته شده است. این به
				روز رسانی موجب یک تجزیه و تحلیل دقیق‌تر برای مشخص کردن نقش فرد در تیم
				شده است.
			</Typography>
			<Typography className={classes.content} variant='p'>
				توجه داشته باشید که هیچ پاسخ درست یا غلطی وجود ندارد. سعی کنید بر اساس
				اینکه شما چه کسی هستید پاسخ دهید، نه اینکه شما دوست دارید چه کسی باشید.
				مشخص است هر گزینه‌ای که خصوصیت رفتاری شما را بیشتر توصیف می‌کند نمره‌ی
				بیشتری به آن تعلق می‌گیرد. زمان پاسخگویی به این تست حدود 15 تا 20 دقیقه
				می‌باشد. مراقب باشید که حداکثر 20 ثانیه صرف پاسخ دادن به هر گزینه کنید.
			</Typography>
			<Typography className={classes.content} variant='p'>
				نحوه انجام تست بلبین به این صورت است که، هر بخش 10 نمره دارد. این 10
				نمره باید بین 9 گزینه توزیع شود. ممکن است یک گزینه 10 نمره بگیرد و بقیه
				گزینه‌ها 0 و ممکن است همه گزینه‌ها نمره‌ای مساوی بگیرند.
			</Typography>
			<Typography className={classes.content} variant='p'>
				برای مثال، اگر فکر می‌کنید که یک جمله به شدت به رفتار شما نزدیک است و دو
				مورد دیگر فقط کمی ‌به شما شباهت دارد، میتوانید امتیاز 6 را برای “به شدت
				نزدیک” و 2 امتیاز برای هر دو جمله دیگر توزیع کنید. یا اگر دو جمله به
				همان اندازه نزدیک به رفتار شما باشد، میتوانید 5 امتیاز به هر یک اختصاص
				دهید. همچنین می‌توانید تمام 10 امتیاز را به یک گزینه اختصاص دهید، یا به
				هر 9 گزینه یک امتیاز اختصاص دهید.
			</Typography>
			<Typography className={classes.content} variant='p'>
				ذکر این نکته بسیار حائز اهمیت می باشد که تعداد دفعات اختصاص امتیاز 10 به
				گزینه‌ها نباید از 3 بار تجاوز کند. در غیر این‌صورت داده‌های شما قابل
				آنالیز کردن نمی‌باشد. اگر جمله‌ای را مطابق رفتار خود نمی‌بینید، آن‌ را
				امتیازدهی نکنید و مکان امتیاز آن‌ را خالی بگذارید. امتیاز آن صفر در نظر
				گرفته خواهد شد.
			</Typography>
			<Link className={classes.headerButton} to='quiz'>
				<Button variant='contained' color='secondary'>
					شروع آزمون
				</Button>
			</Link>
		</Paper>
	);
};

export default Instructions;
